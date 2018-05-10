import React from 'react'
import { Icon } from 'react-native-elements'
import { withNavigation } from 'react-navigation'
import COLORS from '../../constants/Colors'

const CreateEntryButton = ({ navigation: { navigate } }) => (
  <Icon
    containerStyle={{
      position: 'absolute',
      bottom: 5,
      right: 5,
      zIndex: 1,
      backgroundColor: COLORS.main,
    }}
    iconStyle={{
      color: 'white',
    }}
    raised
    size={25}
    name="plus"
    type="font-awesome"
    onPress={() => navigate('CreateEntry')}
  />
)

export default withNavigation(CreateEntryButton)
