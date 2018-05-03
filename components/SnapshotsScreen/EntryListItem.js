import React from 'react'
import styled from 'styled-components'

import COLORS from '../../constants/Colors'

const Box = styled.View`
  width: 100%;
  min-height: 70px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`
const TextBox = styled.View`
  margin: 10px;
  max-width: 70%;
`

const TextItem = styled.Text`
  color: ${COLORS.text};
`

const EntryListItem = ({ id, text }) => (
  <Box>
    <TextBox>
      <TextItem>{text}</TextItem>
    </TextBox>
  </Box>
)

export default EntryListItem
