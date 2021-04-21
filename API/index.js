const express = require('express');
const fs = require('fs');
const https = require('https');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const util = require('minecraft-server-util');
const Discord = require('discord.js');
const { JsonDB } = require('node-json-db')
const { Config } = require('node-json-db/dist/lib/JsonDBConfig')
var cron = require("cron");
require('dotenv').config();

let job = new cron.CronJob('*/5 * * * *', updateDatabase);

// Discord
const client = new Discord.Client();
client.commands = new Discord.Collection();
var cooldown = false;

// Express
var mcDB = new JsonDB(new Config("mc-status", true, false, '/'));
const PORT = 4000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Print Welcome Message
printWelcome();

// Route for getting beammp data
app.get('/beammp', (req, res) => {
    res.send(mcDB.getData("/beam"));
});

// Route for getting minecraft data
app.get('/mc', (req, res) => {
    res.send(mcDB.getData("/status"));
});

// Route for sending a request
app.post('/mail', (req, res) => {
    res.send("hello");
    let userArray = ['212952336065232896'];
    for (var i = 0; i < userArray.length; i++) {
        let u = client.users.fetch(userArray[i]);
        u.then(function (res2) {
            console.log(res2);
            let sugg = new Discord.MessageEmbed()
                .setColor('#ba365b')
                .setTitle('New Suggestion')
                .setDescription('A user has submitted a new suggestion')
                .setTimestamp()
                .setFooter('BrainBot', 'https://i.imgur.com/AkAd7Qo.png');

            console.log(req.body.dUsername);

            sugg.addFields({
                name: 'Username:',
                value: req.body.dUsername
            })

            for (let i = 0; i < req.body.suggestions.length; i++) {
                sugg.addFields({
                    name: i + 1 + ":",
                    value: req.body.suggestions[i]
                })
            }
            res2.send(sugg);
        });
    }
    console.log("mail");
});

// Express
app.listen(PORT, function () {
    console.log('Express server running on port:', PORT);
});


// Read bot commands
fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.error("Couldn't find commands.");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.info(`${f} loaded!`);
        client.commands.set(props.help.name, props);
    });

});


client.on('ready', () => {
    console.info(`\nLogged in as ${client.user.tag}!\n`);
    loadBeamData();
    loadMCData();
    job.start();
});

client.on('message', message => {
    // General checks:
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    if (cooldown == true) {
        //bot is on cooldown
        console.warn("Bot is on cooldown.")
        let cooldownEmbed = new Discord.MessageEmbed()
            .setColor('#8f0707')
            .setTitle('Cooldown')
            .setDescription('You are still on 2 second cooldown!\nStop spamming, 🆔!')
        return message.channel.send(cooldownEmbed)
    } else {
        // bot is not on cooldown, continue
        // Common vars
        let content = message.content.split(" ");
        let command = content[0].toLowerCase();
        //console.log(`running command ${command}`)
        let args = content.slice(1);
        let prefix = ">";

        if (command.substring(0, 1) != prefix) return;

        // Checks if message contains a command and runs it
        let commandfile = client.commands.get(command.slice(prefix.length));
        if (commandfile) {
            commandfile.run(client, message, args)
            cooldown = true;
            setTimeout(() => {
                cooldown = false
            }, 2000); //Timeout for 2 seconds
        } else {
            console.warn(`Command ${command.slice(prefix.length)} does not exist.`)
        }
    }
});

// Discord login
client.login(process.env.BOT_TOKEN)



// Welcome message
function printWelcome() {
    console.log("+-----------------------------------------+");
    console.log("|       Brain Games Backend Server        |");
    console.log("|                  v0.1                   |");
    console.log("|        jslightham & contributors        |");
    console.log("|     (https://github.com/jslightham)     |");
    console.log("+-----------------------------------------+");
}

function loadMCData() {
    var prevOffline = mcDB.getData("/status").status == 'offline';
    util.status('mc.meetandgeek.ca')
        .then((response) => {
            mcDB.push("/status", response);
            if (prevOffline) {
                mcOnline();
            }
        })
        .catch((error) => {
            if (!prevOffline) {
                mcOffline();
            }
            mcDB.push("/status", { status: 'offline' });
            console.log(error);
    });
    
}

function loadBeamData() {
    var prevOffline = mcDB.getData("/beam").length != 2;
    let servers = [];
    var j = 0;
    axios.get('https://backend.beammp.com/servers-info').then(response => {
        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].owner == "perfectsquare150#8584") {
                servers.push(response.data[i]);
                mcDB.push("/beam[" + j + "]", response.data[i]);
                j++;
            }
        }
        if (j == 0) {
            mcDB.delete("/beam[0]");
            mcDB.delete("/beam[1]");
        } else if (j == 1) {
            mcDB.delete("/beam[1]").catch(e => {
                console.log("No server in position 1");
            });
        }
        var isOffline = mcDB.getData("/beam").length != 2;
        if (prevOffline && !isOffline) {
            beamOnline();
        } else if (!prevOffline && isOffline){
            beamOffline();
        }
    });
}

function beamOffline() {
    let userArray = ['212952336065232896'];
    for (var i = 0; i < userArray.length; i++) {
        let u = client.users.fetch(userArray[i]);
        u.then(function (res2) {
            res2.send("One or more BeamNG servers is now offline!");
        });
    }
}

function beamOnline() {
    let userArray = ['212952336065232896'];
    for (var i = 0; i < userArray.length; i++) {
        let u = client.users.fetch(userArray[i]);
        u.then(function (res2) {
            res2.send("All BeamNG servers are back online!");
        });
    }

}

function mcOffline() {
    let userArray = ['212952336065232896'];
    for (var i = 0; i < userArray.length; i++) {
        let u = client.users.fetch(userArray[i]);
        u.then(function (res2) {
            res2.send("The BrainCraft server is now offline!");
        });
    }
}

function mcOnline() {
    let userArray = ['212952336065232896'];
    for (var i = 0; i < userArray.length; i++) {
        let u = client.users.fetch(userArray[i]);
        u.then(function (res2) {
            console.log(res2);
            res2.send("The BrainCraft server is no longer offline!");
        });
    }
}

function updateDatabase() {
    console.log("Running job...")
    loadBeamData();
    loadMCData();
}