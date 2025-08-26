import { MongoClient, ServerApiVersion } from "mongodb";

var uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const ConnectDb = client.connect();

ConnectDb.then(() => console.log("✅ MongoDB connected successfully")).catch(
  (err) => console.error("❌ MongoDB connection error:", err)
);
export default ConnectDb;
