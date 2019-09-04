let express = require('express');
const graphqlHTTP = require('express-graphql');
const {
    buildSchema
} = require('graphql');
let router = express.Router();

let schema = buildSchema(`
    type Query{
        colors: String
    }
`);

let root = {
    colors: () => {
        return "colors yeah";
    }
};

router.use('', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

module.exports = router;