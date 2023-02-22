const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { sequelize } = require('./models');
const { typeDefs, resolvers } = require('./graphql');
const { authMiddleware } = require('./middlewares');
const { startConsumer } = require('./kafka/consumer');
const commentRouter = require('./routes/commentRouter');

const app = express();

app.use(express.json());

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
        user: req.user,
    }),
});

apolloServer.applyMiddleware({ app });

app.use(authMiddleware);

app.use('/comments', commentRouter);

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .then(() => app.listen(3000, () => console.log('Server started on port 3000')))
    .catch((err) => console.error(err));

startConsumer();