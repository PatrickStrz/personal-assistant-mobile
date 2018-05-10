import React, { Fragment } from 'react'

import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import { Platform, StatusBar, StyleSheet } from 'react-native'
import { AppLoading, Asset, Font } from 'expo'
import { Ionicons } from '@expo/vector-icons'
import RootNavigation from './navigation/RootNavigation'
import COLORS from './constants/Colors'
import { IP } from './secrets'

const DEV = true
const ON_DEVICE = false
const GRAPHQL_URI = DEV && ON_DEVICE ? `http://${IP}:4000` : 'http://localhost:4000'

const client = new ApolloClient({
  uri: GRAPHQL_URI,
})

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <ApolloProvider client={client} style={styles.container}>
          <Fragment>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <RootNavigation />
          </Fragment>
        </ApolloProvider>
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ])
  }

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
})
