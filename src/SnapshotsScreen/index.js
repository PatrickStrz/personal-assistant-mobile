import React from 'react'
import styled from 'styled-components'

import moment from 'moment'

import { Calendar } from 'react-native-calendars'
import COLORS from '../../constants/Colors'

import SnapshotList from './SnapshotList'

const Box = styled.View`
  flex: 1;
  background-color: ${COLORS.background};
`

const startDay = moment().format('YYYY-MM-DD')
const endDay = moment()
  .add(1, 'days')
  .format('YYYY-MM-DD')

export default class SnapshotsScreen extends React.Component {
  static navigationOptions = {
    title: 'Snapshots',
  }

  state = { startDay, endDay }

  render() {
    return (
      <Box>
        <Calendar onDayPress={this._handleDayPressed} />
        <SnapshotList startDay={this.state.startDay} endDay={this.state.endDay} />
      </Box>
    )
  }

  _getEndDay = dateString => {
    const yearMonthDay = dateString.split('-')
    return `${yearMonthDay[0]}-${yearMonthDay[1]}-${parseInt(yearMonthDay[2], 10) + 1}`
  }
  _handleDayPressed = ({ dateString }) =>
    this.setState({ startDay: dateString, endDay: this._getEndDay(dateString) })
}
