const express = require("express");
const router = express.Router();

// POST /divide endpoint'i
router.post("/divide", (req, res) => {
  const { number1, number2 } = req.body;

  // Sıfıra bölme kontrolü
  if (number2 === 0) {
    return res.status(400).json({ error: "Sıfıra bölme hatası!" });
  }

  const result = Number(number1) / Number(number2);
  res.json({ result });
});

module.exports = router;
