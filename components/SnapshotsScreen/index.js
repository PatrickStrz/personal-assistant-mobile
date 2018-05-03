import React, { Fragment } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { Calendar } from 'react-native-calendars'
import moment from 'moment'

import EntriesList from './EntriesList'

export default class SnapshotsScreen extends React.Component {
  static navigationOptions = {
    title: 'Snapshots',
  }

  state = { startDay: moment().format('YYYY-MM-DD'), endDay: '' }

  render() {
    console.log('day:', this.state.day)
    return (
      <Fragment>
        <Calendar onDayPress={this._handleDayPressed} />
        <EntriesList startDay={this.state.startDay} endDay={this.state.endDay} />
        <ScrollView style={styles.container}>
          <Text>START DATE: {this.state.startDay}</Text>
        </ScrollView>
      </Fragment>
    )
  }

  _getEndDay = dateString => {
    const yearMonthDay = dateString.split('-')
    return `${yearMonthDay[0]}-${yearMonthDay[1]}-${parseInt(yearMonthDay[2], 10) + 1}`
  }
  _handleDayPressed = ({ dateString }) =>
    this.setState({ startDay: dateString, endDay: this._getEndDay(dateString) })
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
})
