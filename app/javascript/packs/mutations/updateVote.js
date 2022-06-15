import gql from 'graphql-tag';

export const updateVoteMutation = gql`
  mutation voteUpdate($postId: ID!) {
    voteUpdate(postId: $postId) {
      post {
        id,
        votesCount
      }
    }
  }
`;