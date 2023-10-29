const { request } = require('graphql-request');
const { CATEGORIES_QUERY, CATEGORIES_QUERY_BY_ID } = require('../graphql/categories.query');

const { API_GATEWAY_URL } = require('../config');

const getCategories = (args, callback) => {
    request(API_GATEWAY_URL, CATEGORIES_QUERY)
        .then(data => callback({
            categories: data.categories
        }))
        .catch(err => {
            return callback({
                categories: []
            })
        });
}

const getCategoryById = (args, callback) => {
    request(API_GATEWAY_URL, CATEGORIES_QUERY_BY_ID, { id: args.id })
        .then(data => callback({
            categories: data.categoryById
        }))
        .catch(err => {
            return callback({
                categories: []
            })
        });
}

const habitusService = {
    HabitusService: {
        HabitusServiceSoapPort: {
            CategoriesQueryById: getCategoryById,
            CategoriesQuery: getCategories,
        },
        HabitusServiceSoap12Port: {
            CategoriesQueryById: getCategoryById,
            CategoriesQuery: getCategories,
        }
    }
};

module.exports = habitusService;