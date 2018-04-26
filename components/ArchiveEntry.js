import React from "react"
import { Mutation } from "react-apollo"
import { Icon } from "react-native-elements"

const ArchiveEntry = props => (
  <Icon
    raised
    name="archive"
    type="font-awesome"
    color="#f50"
    onPress={() => console.log("hello")}
  />
)

export default ArchiveEntry
