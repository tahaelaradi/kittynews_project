import gql from 'graphql-tag';

export const POST_PAGE_COMMENTS = gql`
  query PostPage($postId: ID!) {
    post(postId: $postId){
      id
      comments {
        id
        text
        user {
         name
        }
      }
    }
}
`;