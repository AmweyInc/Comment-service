const Comment = require('../models/Comment');

const resolvers = {
    Query: {
        comments: async () => {
            const comments = await Comment.findAll();
            return comments;
        },
    },
    Mutation: {
        createComment: async (parent, args, context) => {
            try {
                const comment = await Comment.create({
                    text: args.text,
                    userId: context.user.id
                });
                return comment;
            } catch (err) {
                console.error(err);
                throw new Error('Something went wrong');
            }
        },
    },
};

module.exports = resolvers;