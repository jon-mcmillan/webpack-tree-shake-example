const config = {
  A: {
    PROD: "A - PROD",
    TEST: "A - TEST",
  },
  B: {
    PROD: "B - PROD",
    TEST: "B - TEST",
  },
};

console.log(config[process.env.PARTNER][process.env.MODE]);
console.log(config.B[process.env.MODE]);
