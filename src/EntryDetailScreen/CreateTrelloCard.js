import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Alert } from 'react-native'

import axios from 'axios'
import { ALL_TASKS_LIST_ID, AUTH_QUERYSTRING } from '../../constants/TrelloInfo'

export default class CreateTrelloCard extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  }

  render() {
    return <Button title="Create Trello Card in AllTasks List" onPress={this._handlePress} />
  }

  _handlePress = () => {
    const { name } = this.props
    axios
      .post(`https://api.trello.com/1/cards/?${AUTH_QUERYSTRING}`, {
        idList: ALL_TASKS_LIST_ID,
        name,
        pos: 'top',
      })
      .then(response => {
        const { name } = response.data
        Alert.alert('Success!', `Created trello card with title: '${name}'`)
      })
      .catch(err => {
        console.log(err)
        Alert.alert('Error', 'card was not created')
      })
  }
}
