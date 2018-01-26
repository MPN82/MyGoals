const restify = require('restify');
const builder = require('botbuilder');
const config = require('./config');
const welcomeDialog = require('./dialogs/welcome/index')

// Setup Restify Server
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
const connector = new builder.ChatConnector({
    appId: config.get("MYGOALS_BOT_MICROSOFT_APP_ID"), //process.env.MicrosoftAppId,
    appPassword: config.get() //process.env.MicrosoftAppPassword
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
const bot = new builder.UniversalBot(connector, {
    localizerSettings: {
        defaultLocale: 'en'
    }
});

bot.dialog('welcomeDialog', welcomeDialog);

// function (session) {
//     session.send("You said: %s", session.message.text);
// }