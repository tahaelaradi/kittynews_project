import gql from 'graphql-tag';

export const CREATE_COMMENT = gql`
  mutation commentCreate($postId: ID!, $text: String!) {
    commentCreate(postId: $postId, text: $text) {
     comment {
      id
      text
      user {
        name
       }
      }
    }
  }
`;