import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
const dotenv = require('dotenv');
import path from 'path';
import history from 'connect-history-api-fallback';

dotenv.config();

const app = express();
app.use(express.json());
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname,'../assets')));
app.use(history());
app.use(express.static(path.resolve(__dirname, '../dist'), { maxAge: '1y', etag: false }));


app.get("/api/products", async (req, res) => {
  const MONGODB_URI = process.env.MONGODB_URI;
  const client = await MongoClient.connect(MONGODB_URI);

  const db = client.db("vue-db");
  console.log("Connected to MongoDB");
  const products = await db.collection("products").find({}).toArray();
  res.status(200).json(products);
  client.close();
});

app.get("/api/users/:userId/cart", async (req, res) => {
  const { userId } = req.params; 
  const MONGODB_URI = process.env.MONGODB_URI;
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db("vue-db");
  const user = await db.collection("users").findOne({ id: userId });
  if (!user) return res.status(404).json("Could not find user!");
  const products = await db.collection("products").find({}).toArray();
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map((id) =>
    products.find((product) => product.id === id)
  );
  res.status(200).json(cartItems);
  client.close();
});

app.get("/api/products/:productId", async (req, res) => {
  const { productId } = req.params;
  const MONGODB_URI = process.env.MONGODB_URI;
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db("vue-db");
  const product = await db.collection("products").findOne({ id: productId });
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json("Could not find the product!");
  }
  client.close();
});

app.post("/api/users/:userId/cart", async (req, res) => {
  const { userId } = req.params;
  const { productId } = req.body;
  const MONGODB_URI = process.env.MONGODB_URI;
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db("vue-db");
  await db.collection("users").updateOne(
    { id: userId },
    {
      $addToSet: { cartItems: productId },
    }
  );
  const user = await db.collection("users").findOne({ id: userId });
  const products = await db.collection("products").find({}).toArray();
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map((id) =>
    products.find((product) => product.id === id)
  );
  res.status(200).json(cartItems);
  client.close();
})

app.delete("/api/users/:userId/cart/:productId", async (req, res) => {
  const { userId, productId } = req.params;
  const MONGODB_URI = process.env.MONGODB_URI;
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db("vue-db");

  await db.collection("users").updateOne(
    { id: userId },
    {
      $pull: { cartItems: productId },
    }
  );
  const user = await db.collection("users").findOne({ id: userId });
  const products = await db.collection("products").find({}).toArray();
  const cartItemIds = user.cartItems;
  const cartItems = cartItemIds.map((id) =>
    products.find((product) => product.id === id)
  );

  res.status(200).json(cartItems);
  client.close();
});

app.post("/api/users/:userId/cart/empty", async (req, res) => {
  const { userId } = req.params;
  const MONGODB_URI = process.env.MONGODB_URI;
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db("vue-db");
  
  // Empty the cartItems array for the user
  await db.collection("users").updateOne(
    { id: userId },
    {
      $set: { cartItems: [] },
    }
  );
  
  res.status(200).send({ message: 'Cart emptied successfully!' });
  client.close();
});

app.get('*',(req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is listening on port 8000");
});
