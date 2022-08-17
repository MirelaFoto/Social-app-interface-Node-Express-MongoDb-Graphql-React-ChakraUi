const express = require('express')
const app = express();
const mongoose= require('mongoose')
const graphqlHttp = require('express-graphql')
const movieSchema = require('./schema/schema')
const resolvers = require('./resolver/resolver')
const cors = require('cors')
// database
mongoose.connect('mongodb+srv://mirela1:DbkeRyLKqabZ6M7@cluster0.xx5ig.mongodb.net/movie-app?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('mongodb connected'))

// create graphql 


app.use(cors())

app.use('/graphql', graphqlHttp.graphqlHTTP({
    schema: movieSchema,
    graphiql:true,
    rootValue:resolvers

}))


app.get('/', (req,res)=>{
    res.send('hello from server')
})



app.listen(4000, ()=>console.log('server is running on port:4000'))