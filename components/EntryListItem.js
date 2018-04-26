import React from "react"
import styled from "styled-components"
import ArchiveEntry from "./ArchiveEntry"

const TextContainer = styled.View`
  width: 100%;
  height: 70px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  background-color: white;
`

const TextItem = styled.Text`
  color: teal;
`

const EntryListItem = props => (
  <TextContainer>
    <TextItem>{props.text}</TextItem>
    <ArchiveEntry />
  </TextContainer>
)

export default EntryListItem
