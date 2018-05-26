import React from 'react'
import styled from 'styled-components'
import COLORS from '../../constants/Colors'
import EntriesList from './EntriesList'
import CreateEntryButton from './CreateEntryButton'
import AffirmationHeader from './AffirmationHeader'
import TrelloCompletedCount from './TrelloCompletedCount'

const Box = styled.View`
  flex: 1;
  background-color: ${COLORS.background};
`

const TrelloCountBox = styled.View`
  justify-content: center;
  align-items: center;
  margin: 15px;
`

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <Box>
        <AffirmationHeader />
        <TrelloCountBox>
          <TrelloCompletedCount />
        </TrelloCountBox>
        <EntriesList />
        <CreateEntryButton />
      </Box>
    )
  }
}
