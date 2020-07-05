export const typeDefs = `
  type Query {
    ping: String
    getUsers: [User]!
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(
      nickname: String!,
      fullname: String!,
      phone: String,
      city: String,
    ): User!
    deleteUser(id: ID!): User
  }

  type User {
    _id: ID!
    nickname: String!
    fullname: String!
    phone: String
    city: String
  }
`;
