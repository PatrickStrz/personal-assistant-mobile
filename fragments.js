import gql from "graphql-tag"

export const ENTRY_BODY_FRAGMENT = gql`
  fragment EntryBody on Entry {
    id
    text
  }
`
