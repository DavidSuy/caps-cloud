'use strict';

const { Producer } = require('sqs-producer');
const Chance = require('chance');

const chance = new Chance();

const producer = Producer.create({
  queueUrl: 'https://sqs.us-west-2.amazonaws.com/076529064427/pickupQueue',
  region: 'us-west-2',
});

const message = {
  id: chance.guid(),
  body: 'message from node to sqs',
};

producer
  .send(message)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
