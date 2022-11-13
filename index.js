const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()


const app = express();
const port = process.env.PORT || 5000

// Midlewares
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
 res.send('genius car server runnign')
})


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.04tujxe.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});





app.listen(port,()=>{
    console.log(`Genius car server running on ${port}`)
})