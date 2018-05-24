import React from 'react'
import { ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

import { ENTRY_BODY_FRAGMENT } from '../../fragments'
import ENTRY_STATUS from '../../constants/EntryStatus'
import { USER_ID } from '../../constants/UserInfo'
import SnapshotListItem from './SnapshotListItem'

const Text = styled.Text`
  color: red;
`

export const ENTRIES_BY_DATE_QUERY = gql`
  query allEntries($authorId: ID!, $startDay: DateTime, $endDay: DateTime) {
    entries(
      where: { author: { id: $authorId }, createdAt_gte: $startDay, createdAt_lte: $endDay }
    ) {
      ...EntryBody
    }
  }
  ${ENTRY_BODY_FRAGMENT}
`

const Scroll = styled.ScrollView`
  flex: 1;
`

const renderData = data => {
  return data.entries.map(({ id, text, status }) => (
    <SnapshotListItem key={id} id={id} text={text} inActive={status === ENTRY_STATUS.ARCHIVED} />
  ))
}

const EntriesList = ({ startDay, endDay }) => (
  <Query
    query={ENTRIES_BY_DATE_QUERY}
    variables={{ authorId: USER_ID, startDay, endDay }}
    style={{ flex: 1 }}>
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

EntriesList.propTypes = {
  startDay: PropTypes.string.isRequired,
  endDay: PropTypes.string.isRequired,
}

export default EntriesList
