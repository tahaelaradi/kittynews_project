import gql from 'graphql-tag';

export const POST_PAGE = gql`
  query PostPage($postId: ID!) {
    canVote
    post(postId: $postId){
      id,
      title,
      url,
      tagline,
      commentsCount,
      votesCount
      isVotedByCurrentUser      
      user {
        name
      }
      comments {
        text
        user {
         name
        }
      }
    }
}
`;