import React from 'react'
import styled from 'styled-components'
import COLORS from '../../constants/Colors'

const StyledText = styled.Text`
  color: ${COLORS.text};
  font-size: 17;
`
const Entry = ({ text }) => <StyledText>{text}</StyledText>

export default Entry
