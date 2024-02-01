/**
 * Roman Numeral Spec Referece: https://www.britannica.com/topic/Roman-numeral
 */

/**
 * Convert a base-10 integer to its Roman numeral equivalent.
 * The integer must be any integer value in the range 1-3999.
 * @param input
 * @returns Roman numeral string equivalent
 */
function integerToRomanNumeral(input) {
  // Validate input
  const inputNumber = parseInt(input, 10);
  if (!inputNumber || inputNumber < 1 || inputNumber > 3999) return "";

  // Define Roman numeral matrix
  const RN_MATRIX = [
    ["", "M", "MM", "MMM"],
    ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ];

  // Convert each digit to an integer to index inside RN_MATRIX
  const thousands = Math.floor(inputNumber / 1000);
  const hundreds = Math.floor((inputNumber % 1000) / 100);
  const tens = Math.floor((inputNumber % 100) / 10);
  const ones = Math.floor(inputNumber % 10);
  return (
    RN_MATRIX[0][thousands] +
    RN_MATRIX[1][hundreds] +
    RN_MATRIX[2][tens] +
    RN_MATRIX[3][ones]
  );
}

export default integerToRomanNumeral;
