import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import { TabNavigator, TabBarBottom } from 'react-navigation'

import COLORS from '../constants/Colors'

import HomeScreen from '../src/HomeScreen'
import SnapshotsScreen from '../src/SnapshotsScreen'

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Snapshots: {
      screen: SnapshotsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      style: {
        backgroundColor: 'red',
        height: 400,
      },
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case 'Home':
            iconName = 'home'
            break
          case 'Snapshots':
            iconName = 'history'
            break
        }
        return (
          <MaterialIcons
            name={iconName}
            size={28}
            style={{ marginBottom: -3, width: 25 }}
            color={focused ? COLORS.tabIconSelected : COLORS.tabIconDefault}
          />
        )
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      style: {
        backgroundColor: COLORS.tabBarBottom,
      },
    },
  }
)
