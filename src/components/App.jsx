import { useState } from "react";
import { Form } from "react-router-dom";

export function App() {
  const [output, setOutput] = useState("");

  const submitHandler = async (e) => {
    const form = e.target;
    const formData = new FormData(form);

    // Navigate to endpoint with query
    const URL = "/romannumeral?" + new URLSearchParams(formData);
    const result = await fetch(URL).then(async (res) => {
      const output = res.status === 200 ? res.json() : res.text();
      return output;
    });
    setOutput(result.output ? result.output : result);
  };

  return (
    <div>
      <h1>Integer to Roman Numeral</h1>
      <Form id="input-form" method="get" onSubmit={submitHandler}>
        <label htmlFor="query" style={{ marginRight: "10px" }}>
          Insert your integer between 1 - 3999:
        </label>
        <input
          id="query"
          type="number"
          name="query"
          aria-label="Insert integer"
          placeholder="Integer"
        />
        <button type="submit">Submit</button>
        <br />
        <br />
        <label style={{ marginRight: "10px" }}>Roman numeral equivalent:</label>
        <span id="output">{output}</span>
      </Form>
    </div>
  );
}
