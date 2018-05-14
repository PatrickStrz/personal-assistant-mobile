import React, { Component } from 'react'
import styled from 'styled-components'
import { TouchableOpacity, Animated, StyleSheet } from 'react-native'
import COLORS from '../../constants/Colors'

const StyledText = styled.Text`
  color: ${COLORS.text};
  width: 60%;
  font-size: 18px;
`

export default class AffirmationHeader extends Component {
  state = { isExpanded: false }

  shouldComponentUpdate(nextProps, nextState) {
    if (!this.state.isExpanded && nextState.isExpanded) {
      this._animateExpandHeader()
    }
    if (this.state.isExpanded && !nextState.isExpanded) {
      this._animateRetractHeader()
    }
    return true
  }

  _hiddenHeight = 60
  _expandedHeight = 500
  _duration = 500

  _height = new Animated.Value(this._hiddenHeight)

  _animateExpandHeader = () => {
    Animated.spring(this._height, {
      toValue: this._expandedHeight,
      speed: 4,
    }).start()
  }
  _animateRetractHeader = () => {
    Animated.spring(this._height, {
      toValue: this._hiddenHeight,
      speed: 4,
    }).start()
  }

  _toggleExpanded = () => this.setState(prevState => ({ isExpanded: !prevState.isExpanded }))
  _sampleText = 'Building an app to track a wandering mind and placing tasks in a queue to accomplish lots, gain a sense of mastery and work on passions'
  render() {
    return (
      <TouchableOpacity onPress={this._toggleExpanded}>
        <Animated.View style={[styles.animatedView, { height: this._height }]}>
          <StyledText numberOfLines={this.state.isExpanded ? 50 : 1} style={styles.text}>
            {this._sampleText}
          </StyledText>
        </Animated.View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  animatedView: {
    backgroundColor: COLORS.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
