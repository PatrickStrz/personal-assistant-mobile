import React from 'react'
import styled from 'styled-components'
import COLORS from '../../constants/Colors'
import EntriesList from './EntriesList'
import CreateEntryButton from './CreateEntryButton'
import Heading from '../../uiKit/Heading'

const Box = styled.View`
  flex: 1;
  background-color: ${COLORS.background};
`

const HeadingBox = styled.View`
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: ${COLORS.main};
`

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <Box>
        <HeadingBox>
          <Heading>Passion Tracker</Heading>
        </HeadingBox>
        <EntriesList />
        <CreateEntryButton />
      </Box>
    )
  }
}
