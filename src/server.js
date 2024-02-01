import express from "express";
import integerToRomanNumeral from "./index.js";

const app = express();
const port = 8080;
const errorMessage = "Not a valid integer.";

// EX) http://localhost:8080/romannumeral?query={integer}
app.get("/romannumeral", (req, res) => {
  const input = parseInt(req.query.query);
  if (!input) {
    res.status(400).send(errorMessage);
  } else {
    const output = integerToRomanNumeral(req.query.query);

    if (output.length === 0) {
      res.status(400).send(errorMessage);
    } else {
      res.status(200).send({
        input,
        output,
      });
    }
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
