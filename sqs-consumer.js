'use strict';

const { Consumer } = require('sqs-consumer');

const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/076529064427/pickupQueue',
  handleMessage: (payload) => {
    const message = payload.Body;
    console.log(message);
  },
});

app.start();
