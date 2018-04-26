import React from "react"
import styled, { css } from "styled-components"
import { Platform } from "react-native"

const Card = styled.View.attrs({
  ...Platform.select({
    ios: {
      shadowColor: "black",
      shadowOffset: { height: -3 },
      shadowOpacity: 0.1,
      shadowRadius: 3
    },
    android: {
      elevation: 20
    }
  })
})`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  background-color: #fbfbfb;
  padding-vertical: 20;
`

export default Card
