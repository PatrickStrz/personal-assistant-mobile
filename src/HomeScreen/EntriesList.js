import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import SortableEntriesList from './SortableEntriesList'

import { ENTRY_BODY_FRAGMENT } from '../../fragments'
import EntryListItem from './EntryListItem'
import { USER_ID } from '../../constants/UserInfo'

const Text = styled.Text`
  color: red;
`

export const ALL_ENTRIES_QUERY = gql`
  query allEntries($authorId: ID!) {
    entries(first: 20, where: { author: { id: $authorId }, status: LISTED }) {
      ...EntryBody
    }
  }
  ${ENTRY_BODY_FRAGMENT}
`

const renderRow = ({ active, data: { text, id } }) => (
  <EntryListItem key={id} id={id} text={text} active={active} />
)

const EntriesList = () => (
  <Query query={ALL_ENTRIES_QUERY} variables={{ authorId: USER_ID }} style={{ flex: 1 }}>
    {({ loading, error, data }) => {
      if (loading) return <ActivityIndicator />
      if (error) return <Text>Error</Text>
      if (data) {
        let entriesNormalized = {}
        data.entries.forEach(entry => {
          entriesNormalized[entry.id] = entry
        })
        return <SortableEntriesList data={entriesNormalized} renderRow={renderRow} />
      }
      return <Text>Nothing here</Text>
    }}
  </Query>
)

export default EntriesList
