import { DynamoDB } from 'aws-sdk';

const db = new DynamoDB.DocumentClient();

const { DYNAMODB_TABLE } = process.env;

const put = () => {
  const params = {
    TableName: DYNAMODB_TABLE,
    Item: { id: String(Date.now) },
  };
  console.log({ params });
  return db.put(params).promise();
};

export const listen = async event => {
  console.log(JSON.stringify(event));
  return {
    statusCode: 200,
    body: 'Hello!',
  };
};

export const trigger = async () => {
  await put();
  return {
    statusCode: 200,
    body: 'Hello!',
  };
};
