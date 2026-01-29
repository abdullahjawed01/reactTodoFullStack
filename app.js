import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT ;
import "./utils/dbConnect.js"
import router from "./controllers/index.js";
app.use(express.json())

app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "hello this is cfi block code" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
});

app.use("/todo",router)


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});