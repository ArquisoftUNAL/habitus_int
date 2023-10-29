const { gql } = require('graphql-request');

const CATEGORIES_QUERY = gql`
    query CategoriesQuery {
        categories {
            cat_id
            cat_name
        }
    }
`;

const CATEGORIES_QUERY_BY_ID = gql`
    query CategoriesQueryById($id: String!) {
        categoryById(id: $id) {
            cat_id
            cat_name
        }
    }
`;

module.exports = { CATEGORIES_QUERY, CATEGORIES_QUERY_BY_ID };