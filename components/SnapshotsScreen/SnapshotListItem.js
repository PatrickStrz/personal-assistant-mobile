import React from 'react'
import PropTypes from 'prop-types'
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
  color: ${({ inActive }) => (inActive ? COLORS.lightRed : COLORS.text)};
`

const SnapshotListItem = ({ text, inActive }) => (
  <Box>
    <TextBox>
      <TextItem inActive={inActive}>{text} </TextItem>
    </TextBox>
  </Box>
)

SnapshotListItem.propTypes = {
  text: PropTypes.string.isRequired,
  inActive: PropTypes.bool.isRequired,
}
export default SnapshotListItem
