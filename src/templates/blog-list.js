import React from 'react';
import { graphql } from 'gatsby';

import { BlogList } from '../components/scenes';

export default ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  return (
    <BlogList
      posts={data.allMarkdownRemark.edges}
      currentPage={currentPage}
      numPages={numPages}
    />
  );
};

export const query = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`;
