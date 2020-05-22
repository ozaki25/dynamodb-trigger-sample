import { DynamoDB } from 'aws-sdk';

const db = new DynamoDB.DocumentClient();

const { DYNAMODB_TABLE } = process.env;

const add = () => {
  const params = {
    TableName: DYNAMODB_TABLE,
    Item: { id: String(Date.now()), test1: 'test1', test2: 'test2' },
  };
  console.log({ params });
  return db.put(params).promise();
};

const update = () => {
  const params = {
    TableName: DYNAMODB_TABLE,
    Item: { id: '0', test1: String(Date.now()), test2: String(Date.now()) },
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
  await add();
  await update();
  return {
    statusCode: 200,
    body: 'Hello!',
  };
};
