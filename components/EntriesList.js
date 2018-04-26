import React from "react"
import { ActivityIndicator } from "react-native"
import { Text } from "react-native"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import styled from "styled-components"
import { ENTRY_BODY_FRAGMENT } from "../fragments"
import EntryListItem from "./EntryListItem"

const USER_ID = "cjg9o3ext00330718reim6pc8"

export const ALL_ENTRIES_QUERY = gql`
  query allEntries($id: ID!) {
    entries(where: { author: { id: $id } }) {
      ...EntryBody
    }
  }
  ${ENTRY_BODY_FRAGMENT}
`

const Scroll = styled.ScrollView`
  flex: 1;
`

const renderData = data => {
  return data.entries.map(({ id, text }) => (
    <EntryListItem key={id} text={text} />
  ))
}

const EntriesList = () => (
  <Query
    query={ALL_ENTRIES_QUERY}
    variables={{ id: USER_ID }}
    style={{ flex: 1 }}
  >
    {({ loading, error, data }) => {
      if (loading) return <ActivityIndicator />
      if (error) return <Text>Error</Text>
      if (data) {
        return <Scroll>{renderData(data)}</Scroll>
      }
      return <Text>Nothing here</Text>
    }}
  </Query>
)

export default EntriesList
