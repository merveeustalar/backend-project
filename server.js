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
    const { num1, num2 } = req.body;
    res.json({ result: num1 + num2 });
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
