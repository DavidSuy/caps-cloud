'use strict';

const AWS = require('aws-sdk');

const sns = new AWS.SNS({
  region: 'us-west-2',
});

const topic = 'arn:aws:sns:us-west-2:076529064427:pickup';

const params = {
  TopicArn: topic,
  Protocol: 'application',
  EndPoint: 'sns.us-west-2.amazonaws.com',
};

sns.subscribe(params, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
