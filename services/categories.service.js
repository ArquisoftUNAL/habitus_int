const { request } = require('graphql-request');
const { CATEGORIES_QUERY, CATEGORIES_QUERY_BY_ID } = require('../graphql/categories.query');

const { API_GATEWAY_URL } = require('../config');

const getCategories = (args, callback) => {
    request(API_GATEWAY_URL, CATEGORIES_QUERY)
        .then(data => {
            return callback({
                response: {
                    category: data.categories
                }
            })
        })
        .catch(err => {
            console.log("Error", err);
            return callback({
                response: {
                    category: []
                }
            })
        });
}

const getCategoryById = (args, callback) => {
    request(API_GATEWAY_URL, CATEGORIES_QUERY_BY_ID, { id: args.id })
        .then(data => callback({
            response: {
                category: data.categoryById
            }
        }))
        .catch(err => {
            return callback({
                response: {
                    category: []
                }
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