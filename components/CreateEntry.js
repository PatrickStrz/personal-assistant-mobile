import React from "react"
import { View } from "react-native"
import styled from "styled-components"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import EntryStatus from "../constants/EntryStatus"
import { USER_ID } from "../constants/UserInfo"

const Button = styled.Button``

const CREATE_ENTRY = gql`
  mutation createEntry($id: ID!, $text: String!, $status: EntryStatus!) {
    createEntry(
      data: { text: $text, status: $status, author: { connect: { id: $id } } }
    ) {
      id
    }
  }
`

const CreateEntry = () => (
  <Mutation mutation={CREATE_ENTRY}>
    {createEntry => (
      <Button
        title="Create Entry"
        onPress={() =>
          createEntry({
            variables: {
              id: USER_ID,
              text: "FIRST ENTRY FROM REACT APOLLO",
              status: EntryStatus["LISTED"]
            }
          })
        }
      />
    )}
  </Mutation>
)

export default CreateEntry
