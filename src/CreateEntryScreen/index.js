import React from 'react'
import styled from 'styled-components'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import COLORS from '../../constants/Colors'
import ENTRY_STATUS from '../../constants/EntryStatus'
import { USER_ID } from '../../constants/UserInfo'

import { ALL_ENTRIES_QUERY } from '../HomeScreen/EntriesList'
import { ENTRY_BODY_FRAGMENT } from '../../fragments'

const Box = styled.View`
  padding-top: 40px;
  flex: 1;
  align-items: center;
  background-color: ${COLORS.background};
`

const Button = styled.Button``

const Input = styled.TextInput`
  font-size: 18px;
  color: ${COLORS.text};
  padding: 5px;
  min-height: 50;
  width: 75%;
  border-style: solid;
  border-width: 2px;
  border-color: ${COLORS.main};
`

const CREATE_ENTRY = gql`
  mutation createEntry($id: ID!, $text: String!, $status: EntryStatus!) {
    createEntry(data: { text: $text, status: $status, author: { connect: { id: $id } } }) {
      ...EntryBody
    }
  }
  ${ENTRY_BODY_FRAGMENT}
`

export default class CreateEntryScreen extends React.Component {
  static navigationOptions = {
    title: 'Create Entry',

    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  state = {
    text: '',
  }
  updateCache = (cache, { data: { createEntry } }) => {
    const { entries } = cache.readQuery({
      query: ALL_ENTRIES_QUERY,
      variables: { authorId: USER_ID },
    })
    cache.writeQuery({
      query: ALL_ENTRIES_QUERY,
      variables: { authorId: USER_ID },
      data: { entries: [createEntry, ...entries] },
    })
  }

  render() {
    const {
      navigation: { goBack },
    } = this.props
    return (
      <Mutation mutation={CREATE_ENTRY} update={this.updateCache}>
        {(createEntry, { data, loading, error }) => (
          <Box>
            <Input onChangeText={text => this.setState({ text })} multiline />
            <Button
              title={loading ? '...loading' : 'complete'}
              disabled={this.state.text.length < 1 || loading}
              onPress={() =>
                createEntry({
                  variables: {
                    id: USER_ID,
                    text: this.state.text,
                    status: ENTRY_STATUS['LISTED'],
                  },
                }).then(data => goBack())
              }
            />
          </Box>
        )}
      </Mutation>
    )
  }
}
