import React from 'react'
import styled from 'styled-components'
import COLORS from '../../constants/Colors'
import EntriesList from './EntriesList'
import CreateEntryButton from './CreateEntryButton'
import AffirmationHeader from './AffirmationHeader'

const Box = styled.View`
  flex: 1;
  background-color: ${COLORS.background};
`

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <Box>
        <AffirmationHeader />
        <EntriesList />
        <CreateEntryButton />
      </Box>
    )
  }
}
