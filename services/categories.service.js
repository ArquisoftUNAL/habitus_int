const { request } = require('graphql-request');
const { CATEGORIES_QUERY, CATEGORIES_QUERY_BY_ID } = require('../graphql/categories.query');

const { API_GATEWAY_URL } = require('../config');

const getCategories = (args, callback) => {
    return callback({
        response: {
            category: [
                {
                    cat_name: "Category 1",
                    cat_id: "1"
                },
                {
                    cat_name: "Category 2",
                    cat_id: "1"
                }
            ]
        }
    })
    // request(API_GATEWAY_URL, CATEGORIES_QUERY)
    //     .then(data => {
    //         console.log("Data", data);
    //         return callback({
    //             categories: data.categories
    //         })
    //     })
    //     .catch(err => {
    //         console.log("Error", err);
    //         return callback({
    //             categories: []
    //         })
    //     });
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