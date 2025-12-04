import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: `);
  } catch (error) {
    console.error(`Db connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
