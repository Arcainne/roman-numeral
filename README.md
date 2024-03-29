# Roman Numeral

A web service that takes in a base-10 integer and returns a Roman numeral equivalent.

# How To Build and Run

1. Install with `yarn`:

```
yarn install
```

2. Build

```
yarn build
```

3. Run

```
// Dev mode (with reload)
yarn dev

// Prod mode (without reload)
yarn start
```

You should be able to navigate to `http://localhost:8080/`. It will re-route you to `http://localhost:8080/romannumeral` automatically, where you can enter in integer values into a React UI and see the corresponding Roman numeral.

# Methodology

- This package uses webpack to bundle the project.
- The Roman numeral algorithm is based on a simple indexing matrix of Roman numeral characters for each corresponding base-10 integer digit value from 1 - 3999.
- The algorithm uses the digit place (i.e., ones --> `[0]`, tens --> `[1]`, hundreds --> `[2]`, thousands --> `[3]`) and value for each digit within the input number to index the 2D array of Roman numerals.
- For example, the number `49` could be thought of as "4 tens and 9 ones", or `romanNumerals[1][4] + romanNumerals[0][9]`. The first index represents the digit place, i.e., `[1]` for tens and `[0]` for ones. The second digit represents the digit place value, i.e., `[4]` for "4 tens" and `[9]` for "9 ones".

# Testing

This project uses `Jest` for its unit testing framework. To run the unit test suite, run:

```
// Development (without coverage)
yarn test:dev

// Production (with coverage)
yarn test:prod
```

These tests verify the input (both type and value) and expected output of the `integerToRomanNumeral(input)` function.

# Package Structure

```
./
├── dist/
│   ├── assets/
│   └── index.html
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   └── App.jsx
│   ├── server/
│   │   └── server.js
│   ├── utils/
│   │   ├── tests/
│   │   │   └── integerToRomanNumeral.test.js
│   │   └── integerToRomanNumeral.js
│   └── index.jsx
├── README.md
├── index.html
├── jest.config.json
├── package.json
├── vite.config.js
└── yarn.lock
```

# Dependencies

- "express": "^4.18.2",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-router-dom": "6.22.0",
- "vite-express": "\*"
- "@types/react": "^18.2.43",
- "@types/react-dom": "^18.2.17",
- "@vitejs/plugin-react": "^4.2.1",
- "eslint": "^8.56.0",
- "eslint-plugin-react": "^7.33.2",
- "eslint-plugin-react-hooks": "^4.6.0",
- "eslint-plugin-react-refresh": "^0.4.5",
- "nodemon": "^3.0.1",
- "vite": "^5.0.8",
- "jest": "^29.7.0"
