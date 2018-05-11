import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Platform, Animated, Easing } from 'react-native'
import { withNavigation } from 'react-navigation'
import COLORS from '../../constants/Colors'

class EntryListItem extends Component {
  constructor(props) {
    super(props)

    this._active = new Animated.Value(0)

    this._style = {
      flexDirection: 'column',
      alignItems: 'center',

      ...Platform.select({
        ios: {
          transform: [
            {
              scale: this._active.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.05],
              }),
            },
          ],
          shadowRadius: this._active.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 10],
          }),
        },

        android: {
          transform: [
            {
              scale: this._active.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.07],
              }),
            },
          ],
          elevation: this._active.interpolate({
            inputRange: [0, 1],
            outputRange: [2, 6],
          }),
        },
      }),
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.active !== nextProps.active) {
      console.log('active:', nextProps.active)
      Animated.timing(this._active, {
        duration: 300,
        easing: Easing.bounce,
        toValue: Number(nextProps.active),
      }).start()
    }
  }

  render() {
    const { text, id } = this.props

    return (
      <Animated.View
        style={[styles.entry, this._style]}
        onPress={() => console.log('clickedsdfs!')}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('EntryDetail', { id, text })}>
          <Text style={styles.text} numberOfLines={2}>
            {text}
          </Text>
        </TouchableOpacity>
        <View style={styles.dragGuide} />
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: COLORS.text,
  },
  dragGuide: {
    position: 'absolute',
    bottom: 7,
    height: 10,
    width: 60,
    margin: 10,
    borderRadius: 5,
    backgroundColor: COLORS.backgroundLight,
  },
  entry: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLighter,
    padding: 16,
    minHeight: 100,
    flex: 1,
    marginTop: 7,
    marginBottom: 2,
    borderRadius: 4,

    ...Platform.select({
      ios: {
        width: window.width - 30 * 2,
        shadowColor: 'rgba(0,0,0,0.2)',
        shadowOpacity: 1,
        shadowOffset: { height: 2, width: 2 },
        shadowRadius: 2,
      },

      android: {
        width: window.width - 30 * 2,
        elevation: 0,
        marginHorizontal: 30,
      },
    }),
  },
})

export default withNavigation(EntryListItem)
