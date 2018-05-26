import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { TRELLO_API_KEY, TRELLO_API_TOKEN } from '../../secrets'
import COLORS from '../../constants/Colors'

const CountText = styled.Text`
  color: ${COLORS.secondary};
  font-size: 20px;
`
const ErrorText = styled.Text`
  color: ${COLORS.error};
  font-size: 15px;
`

const COMPLETED_LIST_ID = '5af30c9c9b61e1a360102aa7'

const URI = `https://api.trello.com/1/lists/${COMPLETED_LIST_ID}/cards?fields=id&key=${TRELLO_API_KEY}&token=${TRELLO_API_TOKEN}`

export default class TrelloCompletedCount extends Component {
  componentDidMount() {
    axios
      .get(URI)
      .then(response => {
        this.setState({ count: response.data ? response.data.length : null, error: false })
      })
      .catch(err => {
        console.log(err)
        this.setState({ error: true })
      })
  }
  state = {
    count: null,
    error: false,
  }
  render() {
    return (
      <Fragment>
        {!this.state.error && <CountText>{this.state.count} tasks completed</CountText>}
        {this.state.error && <ErrorText>error fetching completed tasks from trello</ErrorText>}
      </Fragment>
    )
  }
}
