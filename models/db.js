const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
let db;

async function connect() {
  if (!db) {
    await client.connect();
    db = client.db(); // nome do banco vem da URI
  }
  return db;
}

module.exports = { connect };