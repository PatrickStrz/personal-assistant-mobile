import React from "react"
import styled from "styled-components"
import ArchiveEntry from "./ArchiveEntry"
import UpdateEntry from "./UpdateEntry"
import { Button } from "react-native-elements"

const Box = styled.View`
  width: 100%;
  min-height: 70px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  background-color: white;
`
const TextBox = styled.View`
  margin: 10px;
  max-width: 70%;
`

const ButtonsBox = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const TextItem = styled.Text``

const ButtonContainer = styled.View`
  margin: 10px;
`

const EntryListItem = ({ id, text }) => (
  <Box>
    <TextBox>
      <TextItem>{text}</TextItem>
    </TextBox>
    <ButtonsBox>
      <ButtonContainer>
        <UpdateEntry defaultValue="default" entryId={id} defaultValue={text} />
      </ButtonContainer>
      <ButtonContainer>
        <ArchiveEntry id={id} />
      </ButtonContainer>
    </ButtonsBox>
  </Box>
)

export default EntryListItem
