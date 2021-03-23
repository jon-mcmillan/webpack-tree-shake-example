const config = require("./config.json");
const partnerMessage = config[process.env.PARTNER];

console.log(partnerMessage);
