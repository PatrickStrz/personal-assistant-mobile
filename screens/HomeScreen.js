import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import styled from 'styled-components'
import COLORS from '../constants/Colors'
import EntriesList from '../components/EntriesList'
import CreateEntryButton from '../components/CreateEntryButton'
import Heading from '../uiKit/Heading'
import SortableList from '../components/SortableEntriesList'

const Box = styled.View`
  flex: 1;
  background-color: ${COLORS.background};
`

const HeadingBox = styled.View`
  justify-content: center;
  align-items: center;
  height: 50px;
`

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <Box>
        {/* <ScrollView style={styles.contentContainer} contentContainerStyle={styles.contentContainer}> */}
        <HeadingBox>
          <Heading>Passion Tracker</Heading>
        </HeadingBox>
        {/* <EntriesList /> */}
        <SortableList />
        {/* </ScrollView> */}
        <CreateEntryButton />
      </Box>
    )
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 100,
  },
})
