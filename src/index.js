const { GatewayIntentBits } = require("discord.js");
const Client = require("./Utils/Client/CustomClient");
const client = new Client({
  intents: Object.keys(GatewayIntentBits).filter((intent) => isNaN(intent)),
});

require("dotenv").config();
client.start();
