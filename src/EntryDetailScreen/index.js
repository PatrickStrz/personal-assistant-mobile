import React from 'react'
import styled from 'styled-components'
import ArchiveEntry from './ArchiveEntry'
import UpdateEntry from './UpdateEntry'

const Box = styled.View`
  flex: 1;
`

const EntryDetailScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const text = navigation.getParam('text')
  return (
    <Box>
      <ArchiveEntry id={id} />
      <UpdateEntry entryId={id} defaultValue={text} />
    </Box>
  )
}

export default EntryDetailScreen
