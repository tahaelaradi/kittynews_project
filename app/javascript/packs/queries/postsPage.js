import gql from 'graphql-tag';

export const postsPageQuery = gql`
  query PostsPage {
    viewer {
      id
    }
    postsAll {
      id
      title
      tagline
      url
      commentsCount
      votesCount
    }
  }
`;