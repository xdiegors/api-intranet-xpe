import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

async function connect() {
  const uri = process.env.MONGO_CON;
  return await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

export { connect };
