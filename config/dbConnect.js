import mongoose from "mongoose";

mongoose.connect("mongodb+srv://dennygabriel:123@nodeexpress.aovcg6x.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;