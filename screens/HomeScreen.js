import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'

import EntriesList from '../components/EntriesList'
import CreateEntryButton from '../components/CreateEntryButton'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.contentContainer} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text>Passion Tracker</Text>
          </View>
          <EntriesList />
        </ScrollView>
        <CreateEntryButton />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
    paddingBottom: 100,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
})
