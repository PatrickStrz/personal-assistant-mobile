import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { TRELLO_API_KEY, TRELLO_API_TOKEN } from '../../secrets'
import COLORS from '../../constants/Colors'

const CountText = styled.Text`
  color: ${COLORS.secondary};
  font-size: 25px;
`

const COMPLETED_LIST_ID = '5af30c9c9b61e1a360102aa7'

const URI = `https://api.trello.com/1/lists/${COMPLETED_LIST_ID}/cards?fields=id&key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}`

export default class TrelloCompletedCount extends Component {
  componentDidMount() {
    axios
      .get(URI)
      .then(response => {
        console.log('response.data.length:', response.data.length)
        this.setState({ count: response.data ? response.data.length : null })
      })
      .catch(err => {
        console.log(err)
      })
  }
  state = {
    count: null,
  }
  render() {
    return <CountText>{this.state.count && this.state.count} tasks completed</CountText>
  }
}
