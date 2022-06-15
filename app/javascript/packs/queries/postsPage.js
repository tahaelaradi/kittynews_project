import gql from 'graphql-tag';

export const POSTS_PAGE = gql`
  query PostsPage {
    viewer {
      id
    }
    canVote
    postsAll {
      id
      title
      tagline
      url
      commentsCount
      votesCount
      isVotedByCurrentUser
    }
  }
`;