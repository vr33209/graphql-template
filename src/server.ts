import { GraphQLServer } from 'graphql-yoga';
import mongoose from 'mongoose';
import { typeDefs, resolvers } from './schema'
require('dotenv').config()

const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_URL } = process.env;
const server = new GraphQLServer({
	typeDefs,
	resolvers,
})

server.start({port:5000}).catch((err) => console.log(err))
mongoose.connect(`mongodb://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_URL}`, { useNewUrlParser: true }).catch((err) => console.log(err))
mongoose.connection.once('open', () => { console.log('Connected to database') })
