import React from "react"
import styled from "styled-components"

const TextContainer = styled.View`
  width: 100%;
  height: 70px;
  align-items: center;
  background-color: white;
`

const TextItem = styled.Text`
  color: teal;
`

const EntryListItem = props => (
  <TextContainer>
    <TextItem>{props.text}</TextItem>
  </TextContainer>
)

export default EntryListItem
