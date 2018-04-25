import React from "react"
import { View, Text, Platform, TextInput } from "react-native"
import styled from "styled-components"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import EntryStatus from "../constants/EntryStatus"
import { USER_ID } from "../constants/UserInfo"

const Button = styled.Button``

const CREATE_ENTRY = gql`
  mutation createEntry($id: ID!, $text: String!, $status: EntryStatus!) {
    createEntry(
      data: { text: $text, status: $status, author: { connect: { id: $id } } }
    ) {
      id
    }
  }
`

class CreateEntry extends React.Component {
  state = { showInput: false, text: "" }

  showInput = () => this.setState({ showInput: true })
  hideInput = () => this.setState({ showInput: false })

  renderInput = () => {
    return (
      <Mutation mutation={CREATE_ENTRY}>
        {createEntry => (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={text => this.setState({ text })}
            />
            <Button
              title="complete"
              onPress={() =>
                createEntry({
                  variables: {
                    id: USER_ID,
                    text: this.state.text,
                    status: EntryStatus["LISTED"]
                  }
                }).then(this.hideInput())
              }
            />
          </View>
        )}
      </Mutation>
    )
  }
  render() {
    return (
      <React.Fragment>
        {this.state.showInput ? (
          this.renderInput()
        ) : (
          <Button title="Create Entry" onPress={this.showInput} />
        )}
      </React.Fragment>
    )
  }
}

const styles = {
  textInput: {
    fontSize: 18,
    padding: 5,
    height: 50,
    width: "60%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "teal"
  },
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  inputContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 60
  }
}

export default CreateEntry
