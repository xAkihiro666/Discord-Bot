const aoijs = require("aoi.js")
const { Util } = require("aoi.js");
const { setup } = require("aoi.parser");
require("dotenv").config();

setup(Util);

const bot = new aoijs.AoiClient({
    token: process.env.TOKEN,
    prefix: "!",
    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildBans", "GuildWebhooks", "GuildPresences", "DirectMessages", "GuildMembers"],
    events: ["onMessage", "onMessageDelete", "onMessageUpdate", "onMessageDeleteBulk", "onInteractionCreate", "onJoin"],
})

//Command Example (ping)
bot.command({
    name: "ping",
    code: `Pong! $pingms`
})

bot.variables(require('./variable'))
//Command Handler loader
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, './commands/')



//Music Related

const {
    AoiVoice,
    PlayerEvents,
    PluginName,
    Cacher,
    Filter,
} = require(`@akarui/aoi.music`);

const voice = new AoiVoice(bot, {
    searchOptions: {
        // soundcloudClientId: "Sound Cloud Id",
        youtubegl: "US",
    },
    requestOptions: {
        offsetTimeout: 0,
        soundcloudLikeTrackLimit: 200,
    },
});
voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));
voice.addPlugin(PluginName.Filter, new Filter({
    filterFromStart: false,
}));