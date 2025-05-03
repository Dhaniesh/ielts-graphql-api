import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import db from './_db.js'
const resolvers = {
    Query: {
        articleCollection() {
            return db.articles
        },
        article(_, args) {
            return db.articles.find((article) => article.id == args.id)
        }
    },
    Article: {
        description(parent) {
            return db.descriptions.find((description) => parent.description == description.id)
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);