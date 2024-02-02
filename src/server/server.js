import express from "express";
import ViteExpress from "vite-express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import integerToRomanNumeral from "../utils/integerToRomanNumeral.js";

const app = express();
const port = 8080;
const errorMessages = {
  invalidInteger: "Not a valid integer.",
  missingQuery: "Missing query.",
};
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const buildPath = path.normalize(path.join(__dirname, "../../dist/"));
app.use(express.static(buildPath));

// EX) http://localhost:8080/romannumeral?query={integer}
app.get("/romannumeral", (req, res) => {
  // Verify query exists
  const { query } = req.query;
  if (!query) {
    res.sendFile(path.join(buildPath, "index.html"));
    return;
  }

  // Verify query input is an integer
  const input = parseInt(query);
  if (!input) {
    res.status(400).send(errorMessages.invalidInteger);
    return;
  }

  // Handle invalid input
  if (query && input) {
    const output = integerToRomanNumeral(query);
    if (output.length === 0) {
      res.status(400).send(errorMessages.invalidInteger);
      return;
    }
    // Return success JSON payload
    res.status(200).send({
      input,
      output,
    });
  }
});

ViteExpress.listen(app, port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}...`);
});
