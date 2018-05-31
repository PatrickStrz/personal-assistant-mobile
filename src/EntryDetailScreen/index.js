import React from 'react'
import styled from 'styled-components'
import ArchiveEntry from './ArchiveEntry'
import UpdateEntry from './UpdateEntry'
import COLORS from '../../constants/Colors'
import EntryDetailQuery from './EntryDetailQuery'
import CreateTrelloCard from './CreateTrelloCard'

const Box = styled.View`
  padding: 20px;
  background-color: ${COLORS.background};
  flex: 1;
  align-items: center;
`
const ButtonsBox = styled.View`
  margin-top: 20px;
  width: 40%;
`

const EntryDetailScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const text = navigation.getParam('text')
  return (
    <Box>
      <EntryDetailQuery id={id} />
      <ButtonsBox>
        <ArchiveEntry id={id} />
        <UpdateEntry entryId={id} defaultValue={text} />
        <CreateTrelloCard name={text} />
      </ButtonsBox>
    </Box>
  )
}

export default EntryDetailScreen
