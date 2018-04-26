import React, { Component } from "react"
import { Mutation } from "react-apollo"
import styled from "styled-components"
import Overlay from "react-native-modal-overlay"
import { TextInput } from "react-native-elements"

const Text = styled.Text``

export default class UpdateEntry extends Component {
  render() {
    return (
      <Overlay visible>
        <Text>Yoooooooo</Text>
      </Overlay>
    )
  }
}
