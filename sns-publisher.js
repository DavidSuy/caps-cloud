'use strict';

const AWS = require('aws-sdk');

const sns = new AWS.SNS({
  region: 'us-west-2',
});

const topic = 'arn:aws:sns:us-west-2:076529064427:pickup';

const payload = {
  TopicArn: topic,
  Message: 'Hello world form node',
};

setInterval(() => {
  sns
    .publish(payload)
    .promise()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}, 3000);
