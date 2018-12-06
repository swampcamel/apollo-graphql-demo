// src/lambda/graphql.js
const { ApolloServer, gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Query {
    hello: String
    yerMom: String
    dogPhotoUrl: String
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello, world!";
    },
    yerMom: (root, args, context) => {
      return "This is yer mom";
    },
   dogPhotoUrl: (root, args, context) => {
     return "https://images.dog.ceo/breeds/pomeranian/n02112018_1090.jpg";
  }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

exports.handler = server.createHandler();
