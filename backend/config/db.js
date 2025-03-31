import mongoose from "mongoose";

export const connectDb = async () => {
  try {

const conn = await mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  poolSize: 10
});    console.log(`MongoDb Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
