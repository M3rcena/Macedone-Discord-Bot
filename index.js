const Discord = require("discord.js");
const colors = require("colors");
const config = require("./config.json")
const OS = require('os')
const enmap = require("enmap");
const fs = require("fs");
const Events = require("events");
const { delay } = require("./handlers/functions")
require('dotenv').config()

const client = new Discord.Client({
    fetchAllMembers: false,
    restTimeOffset: 0,
    failIfNotExists: false,
    shards: "auto",
    allowedMentions: {
        parse: ["roles", "users"],
        repliedUser: false,
    },
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER'],
    intents: [Discord.Intents.FLAGS.GUILDS,
              Discord.Intents.FLAGS.GUILD_MEMBERS,
              Discord.Intents.FLAGS.GUILD_BANS,
              Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
              Discord.Intents.FLAGS.GUILD_INTEGRATIONS,
              Discord.Intents.FLAGS.GUILD_WEBHOOKS,
              Discord.Intents.FLAGS.GUILD_INVITES,
              Discord.Intents.FLAGS.GUILD_VOICE_STATES,
              Discord.Intents.FLAGS.GUILD_PRESENCES,
              Discord.Intents.FLAGS.GUILD_MESSAGES,
              Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
              Discord.Intents.FLAGS.GUILD_MESSAGE_TYPING,
              Discord.Intents.FLAGS.DIRECT_MESSAGES,
              Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
              Discord.Intents.FLAGS.DIRECT_MESSAGE_TYPING
  ],
  presence: {
    activities: [{name: `${config.status.text}`.replace("{prefix}", config.prefix), type: config.status.type, url: config.status.url}],
    status: "online"
  }
});

//BOT WAS CODED BY Mercena2007//