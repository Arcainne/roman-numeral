import { describe, test, expect } from "@jest/globals";
import integerToRomanNumeral from "../integerToRomanNumeral";

describe("integerToRomanNumeral Tests", () => {
  const tests = [
    [1, "I"],
    [3, "III"],
    [4, "IV"],
    [8, "VIII"],
    [9, "IX"],
    [13, "XIII"],
    [14, "XIV"],
    [19, "XIX"],
    [33, "XXXIII"],
    [44, "XLIV"],
    [99, "XCIX"],
    [444, "CDXLIV"],
    [888, "DCCCLXXXVIII"],
    [999, "CMXCIX"],
    [3333, "MMMCCCXXXIII"],
    [3999, "MMMCMXCIX"],
    [4000, ""],
    [0, ""],
    [-50, ""],
    ["Hello world", ""],
    ["42", "XLII"],
    ["1234", "MCCXXXIV"],
    ["12345", ""],
  ];
  test.each(tests)(
    "integerToRomanNumeral(%s) should be %s",
    (input, output) => {
      expect(integerToRomanNumeral(input)).toBe(output);
    }
  );
});
