import gql from 'graphql-tag';

export const UPDATE_VOTE = gql`
  mutation voteUpdate($postId: ID!) {
    voteUpdate(postId: $postId) {
      post {
        id,
        votesCount,
        isVotedByCurrentUser
      }
    }
  }
`;