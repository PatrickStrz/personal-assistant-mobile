import React from "react"
import { Text } from "react-native"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import styled from "styled-components"
import { USER_ID } from "../App"
import CreateEntry from "./CreateEntry"

const HOME_QUERY = gql`
  query entriesForUser($id: ID!) {
    user(where: { id: $id }) {
      id
      entries {
        id
        text
      }
    }
  }
`

const TextContainer = styled.View`
  width: 100%;
  height: 70px;
  align-items: center;
  /* justify-content: center; */
  background-color: greenyellow;
`

const TextItem = styled.Text`
  color: blue;
`

const Scroll = styled.ScrollView`
  flex: 1;
`

const renderData = data => {
  return data.user.entries.map(({ id, text }) => (
    <TextContainer key={id}>
      <TextItem>{text}</TextItem>
    </TextContainer>
  ))
}

const Home = () => (
  <Query query={HOME_QUERY} variables={{ id: USER_ID }} style={{ flex: 1 }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>
      if (error) return <Text>Error : </Text>
      if (data) {
        return (
          <Scroll>
            {/* <CreateEntry /> */}
            {renderData(data)}
          </Scroll>
        )
      }
      return <Text>Nothing here</Text>
    }}
  </Query>
)

export default Home
