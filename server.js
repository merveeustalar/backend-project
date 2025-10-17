const divideRouter = require("./divide"); // yeni dosya
app.use("/", divideRouter);
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Backend çalışıyor!");
});

app.post("/sum", (req, res) => {
    const { number1, number2 } = req.body;
    res.json({ result: number1 + number2 });
});
app.post("/multiply", (req, res) => {
    const { number1, number2 } = req.body;
    const result = Number(number1) * Number(number2);
    res.json({ result });
  });
  

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
