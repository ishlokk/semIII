const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        Name: String
        Email: String
        RollNo: Int
    }
`);

const root = {
    Name: () => {        //or just write hello: () => 'hello';
        return 'Harshit';
    },
    Email: () => {
        return 'Harshit@example.com';
    },
    RollNo: () => {
        return 12;
    }
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));    

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000/graphql');
});
