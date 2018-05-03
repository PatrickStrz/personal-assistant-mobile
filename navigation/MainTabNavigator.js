import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import { TabNavigator, TabBarBottom } from 'react-navigation';

import COLORS from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen'

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Snapshots: {
      screen: LinksScreen,
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
       backgroundColor: COLORS.tabBarBottom
      },
    },
  }
);
