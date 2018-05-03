import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class SnapshotsScreen extends React.Component {
  static navigationOptions = {
    title: 'Snapshots',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Snapshots heeer</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
