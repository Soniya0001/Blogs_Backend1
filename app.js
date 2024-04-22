const express = require("express");
const app = express();
const cors = require("cors");
const blogs = require("./routes/blogs")
require("dotenv").config();
require("./database/connection");

const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
// app.use(cors());
app.use(cors(corsOption));
app.use(express.json());

app.use("/api/v1", blogs);

app.listen(process.env.PORT, () =>{
    console.log(`Server is running on ${process.env.PORT}`)
})