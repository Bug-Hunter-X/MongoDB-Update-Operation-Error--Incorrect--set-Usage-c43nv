```javascript
// Correct update operation using $set and $setOnInsert
const { MongoClient } = require('mongodb');

async function updateDocument() {
  const uri = "mongodb://localhost:27017"; // Replace with your connection string
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('myDatabase');
    const collection = database.collection('myCollection');

    const result = await collection.updateOne({ _id: 1 }, {
      $set: { name: 'UpdatedName' },
      $setOnInsert: { age: 30 }
    });

    console.log('Modified count:', result.modifiedCount);
  } finally {
    await client.close();
  }
}

updateDocument().catch(console.dir);
```