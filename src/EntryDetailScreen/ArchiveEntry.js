import React from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { Icon } from 'react-native-elements'
import { ALL_ENTRIES_QUERY } from '../HomeScreen/EntriesList'
import { ENTRY_BODY_FRAGMENT } from '../../fragments'
import { USER_ID } from '../../constants/UserInfo'
import COLORS from '../../constants/Colors'

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
    refetchQueries={[{ query: ALL_ENTRIES_QUERY, variables: { authorId: USER_ID } }]}>
    {(archiveEntry, { loading, error, data }) => {
      return (
        <Icon
          name="archive"
          color={COLORS.secondary}
          type="font-awesome"
          onPress={() => archiveEntry()}
          disabled={loading}
        />
      )
    }}
  </Mutation>
)

ArchiveEntry.propTypes = {
  id: PropTypes.string.isRequired,
}

export default ArchiveEntry
