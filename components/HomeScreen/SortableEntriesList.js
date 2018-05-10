import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Platform } from 'react-native'
import SortableList from 'react-native-sortable-list'

export default class SortableEntriesList extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    renderRow: PropTypes.func.isRequired,
  }
  render() {
    const { data, renderRow } = this.props
    return (
      <SortableList
        style={styles.list}
        contentContainerStyle={styles.contentContainer}
        data={data}
        renderRow={renderRow}
        onChangeOrder={this._onChangeOrder}
      />
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },

  contentContainer: {
    width: window.width,

    ...Platform.select({
      ios: {
        paddingHorizontal: 30,
      },

      android: {
        paddingHorizontal: 0,
      },
    }),
  },
})
