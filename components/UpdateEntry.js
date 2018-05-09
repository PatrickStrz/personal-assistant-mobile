import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import Overlay from 'react-native-modal-overlay'
import { Input, Icon, Button } from 'react-native-elements'
import { ENTRY_BODY_FRAGMENT } from '../fragments'
import COLORS from '../constants/Colors'

const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`
const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

const UPDATE_ENTRY_TEXT_MUTATION = gql`
  mutation updateEntryText($entryId: ID!, $text: String) {
    updateEntry(where: { id: $entryId }, data: { text: $text }) {
      ...EntryBody
    }
  }
  ${ENTRY_BODY_FRAGMENT}
`

export default class UpdateEntry extends Component {
  state = { text: this.props.defaultValue, updateInputVisible: false }

  showEditInput = () => this.setState({ updateInputVisible: true })
  closeEditInput = () =>
    this.setState((prevState, props) => ({
      updateInputVisible: false,
      text: props.defaultValue,
    }))

  render() {
    const { defaultValue, entryId } = this.props

    return (
      <Fragment>
        <Icon
          name="edit"
          type="font-awesome"
          color={COLORS.secondary}
          onPress={this.showEditInput}
        />

        <Overlay visible={this.state.updateInputVisible}>
          <Container>
            <Input
              inputStyle={{ width: 350 }}
              multiline
              label="Edit entry"
              defaultValue={defaultValue}
              onChangeText={text => this.setState({ text })}
            />
            <ButtonContainer>
              <Mutation mutation={UPDATE_ENTRY_TEXT_MUTATION}>
                {(updateEntryText, { loading, error, data }) => {
                  return (
                    <Button
                      title="Done"
                      style={{
                        marginRight: 10,
                        backgroundColor: loading ? 'red' : 'green',
                      }}
                      disabled={loading}
                      onPress={() =>
                        updateEntryText({
                          variables: {
                            entryId,
                            text: this.state.text,
                          },
                        }).then(this.closeEditInput())
                      }
                    />
                  )
                }}
              </Mutation>
              <Button title="Close" onPress={this.closeEditInput} />
            </ButtonContainer>
          </Container>
        </Overlay>
      </Fragment>
    )
  }
}
