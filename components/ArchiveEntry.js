import React from "react"
import { ActivityIndicator } from "react-native"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import { Icon } from "react-native-elements"
import colors from "../constants/Colors"
import { ALL_ENTRIES_QUERY } from "./EntriesList"
import { ENTRY_BODY_FRAGMENT } from "../fragments"
import { USER_ID } from "../constants/UserInfo"

const ARCHIVE_ENTRY_MUTATION = gql`
  mutation archiveEntry($id: ID!) {
    updateEntry(where: { id: $id }, data: { status: ARCHIVED }) {
      ...EntryBody
    }
  }
  ${ENTRY_BODY_FRAGMENT}
`

const ArchiveEntry = ({ id }) => (
  <Mutation
    mutation={ARCHIVE_ENTRY_MUTATION}
    variables={{ id }}
    refetchQueries={[
      { query: ALL_ENTRIES_QUERY, variables: { authorId: USER_ID } }
    ]}
  >
    {(archiveEntry, { loading, error, data }) => {
      return (
        <Icon
          name="archive"
          type="font-awesome"
          onPress={() => archiveEntry()}
          disabled={loading}
        />
      )
    }}
  </Mutation>
)

export default ArchiveEntry
