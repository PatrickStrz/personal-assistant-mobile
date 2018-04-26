import React from "react"
import { Text } from "react-native"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import styled from "styled-components"
import { ENTRY_BODY_FRAGMENT } from "../fragments"

const USER_ID = "cjg9o3ext00330718reim6pc8"

export const ALL_ENTRIES_QUERY = gql`
  query allEntries($id: ID!) {
    entries(where: { author: { id: $id } }) {
      ...EntryBody
    }
  }
  ${ENTRY_BODY_FRAGMENT}
`

const TextContainer = styled.View`
  width: 100%;
  height: 70px;
  align-items: center;
  background-color: white;
`

const TextItem = styled.Text`
  color: teal;
`

const Scroll = styled.ScrollView`
  flex: 1;
`

const renderData = data => {
  return data.entries.map(({ id, text }) => (
    <TextContainer key={id}>
      <TextItem>{text}</TextItem>
    </TextContainer>
  ))
}

const EntriesList = () => (
  <Query
    query={ALL_ENTRIES_QUERY}
    variables={{ id: USER_ID }}
    style={{ flex: 1 }}
  >
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error : </Text>
      if (data) {
        return <Scroll>{renderData(data)}</Scroll>
      }
      return <Text>Nothing here</Text>
    }}
  </Query>
)

export default EntriesList
