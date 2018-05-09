import React, { Component } from 'react'
import { StyleSheet, Platform } from 'react-native'
import SortableList from 'react-native-sortable-list'

import styled from 'styled-components'

const RowContainer = styled.View`
  flex: 1;
  border: 2px solid red;
  height: 60px;
  margin-bottom: 5px;
`
const RowText = styled.Text`
  color: blue;
  font-size: 20px;
`

const data = {
  0: {
    image: 'https://placekitten.com/200/240',
    text: 'Chloe',
  },
  1: {
    image: 'https://placekitten.com/200/201',
    text: 'Jasper',
  },
  2: {
    image: 'https://placekitten.com/200/202',
    text: 'Pepper',
  },
  3: {
    image: 'https://placekitten.com/200/203',
    text: 'Oscar',
  },
  4: {
    image: 'https://placekitten.com/200/204',
    text: 'Dusty',
  },
  5: {
    image: 'https://placekitten.com/200/205',
    text: 'Spooky',
  },
  6: {
    image: 'https://placekitten.com/200/210',
    text: 'Kiki',
  },
  7: {
    image: 'https://placekitten.com/200/215',
    text: 'Smokey',
  },
  8: {
    image: 'https://placekitten.com/200/220',
    text: 'Gizmo',
  },
  9: {
    image: 'https://placekitten.com/220/239',
    text: 'Kitty',
  },
}

export default class SortableEntriesList extends Component {
  render() {
    return (
      <SortableList
        style={styles.list}
        contentContainerStyle={{
          width: window.width,

          ...Platform.select({
            ios: {
              paddingHorizontal: 30,
            },

            android: {
              paddingHorizontal: 0,
            },
          }),
        }}
        data={data}
        renderRow={this._renderRow}
      />
    )
  }
  _renderRow = ({ data, active }) => {
    return (
      <RowContainer>
        <RowText>{data.text}</RowText>
      </RowContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',

    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
    }),
  },

  title: {
    fontSize: 20,
    paddingVertical: 20,
    color: '#999999',
  },

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

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    height: 80,
    flex: 1,
    marginTop: 7,
    marginBottom: 12,
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

  image: {
    width: 50,
    height: 50,
    marginRight: 30,
    borderRadius: 25,
  },

  text: {
    fontSize: 24,
    color: '#222222',
  },
})
