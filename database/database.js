import mongoose from "mongoose";

export const connectdb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backend0501",
    })
    .then((c) => console.log(`Database Connected on host ${c.connection.host}`))
    .catch((e) => console.log("error"));
};
