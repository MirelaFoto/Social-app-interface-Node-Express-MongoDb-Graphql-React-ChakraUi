const {buildSchema} = require('graphql')

const userSchema = buildSchema(`
type Query{
   users:[User],
    userByName(name:String!):User
}
type Mutation{
    addUser(id:ID!,name:String!,email:String!,phone:String!):User
}
type User{
    id:ID,
    name:String,
    email:String,
    phone:String
}

`)

module.exports = userSchema

