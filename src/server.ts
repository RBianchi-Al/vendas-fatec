import express from "express";

const app = express();

app.use(express.json());

app.listen(5555, () => console.log("Server is running 🚀"));