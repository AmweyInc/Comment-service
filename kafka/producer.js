const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: [process.env.KAFKA_BROKER_URL],
});

const producer = kafka.producer();

const sendCommentCreatedMessage = async (comment) => {
    await producer.connect();
    await producer.send({
        topic: 'comment.created',
        messages: [
            { value: JSON.stringify(comment) },
        ],
    });
    await producer.disconnect();
};

module.exports = {
    sendCommentCreatedMessage,
};