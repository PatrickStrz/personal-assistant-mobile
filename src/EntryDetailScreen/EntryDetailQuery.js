import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Entry from './Entry'

const ENTRY_QUERY = gql`
  query EntryDetail($id: ID!) {
    entry(where: { id: $id }) {
      id
      text
    }
  }
`

const EntryDetailQuery = ({ id }) => {
  console.log(typeof id)
  return (
    <Query query={ENTRY_QUERY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <Entry text={'Loading...'} />
        if (error) return `Error! ${error.message}`
        if (data) {
          return <Entry text={data.entry.text} />
        }
      }}
    </Query>
  )
}

EntryDetailQuery.propTypes = {
  id: PropTypes.string.isRequired,
}

export default EntryDetailQuery
