const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.TOKEN);
var http = require('http'); // 3. HTTP server
var app = require('./app'); // this is your express app
var port = process.env.PORT; // 2. Using process.env.PORT
app.set('port', port);
var server = http.createServer(app);
server.listen(port);

client.on('ready', () => {
FixEvery5M();
GameBar();
setInterval(function() {
    http.get("http://hfreee.herokuapp.com");
	}, 300000); // every 5 minutes (300000
	// PING SERVER
setInterval(GameBar, 30000);
setInterval(FixEvery5M, 900000);
})

function FixEvery5M(){
	Chan1 = client.channels.find("id", "469603172676272148");
	Chan2 = client.channels.find("id", "469603233514651648");
	Chan3 = client.channels.find("id", "469603216565207040");
	Chan4 = client.channels.find("id", "469603840841482252");
	Chan5 = client.channels.find("id", "469603824705732619");
	Chan6 = client.channels.find("id", "469603799624056843");
	Chan7 = client.channels.find("id", "469603247233957893");
	Chan8 = client.channels.find("id", "469603267828252672");
	Chan9 = client.channels.find("id", "469603859568918538");
	Chan10 = client.channels.find("id", "469603894301818881");
	Chan11 = client.channels.find("id", "469604582184452116");
	Chan12 = client.channels.find("id", "469604622269677578");
	Chan13 = client.channels.find("id", "469604672915636235");
	fixChannel(Chan1);
	fixChannel(Chan2);
	fixChannel(Chan3);
	fixChannel(Chan4);
	fixChannel(Chan5);
	fixChannel(Chan6);
	fixChannel(Chan7);
	fixChannel(Chan8);
	fixChannel(Chan9);
	fixChannel(Chan10);
	fixChannel(Chan11);
	fixChannel(Chan12);
	fixChannel(Chan13);
	cleanChannel(Chan1);
	cleanChannel(Chan2);
	cleanChannel(Chan3);
	cleanChannel(Chan4);
	cleanChannel(Chan5);
	cleanChannel(Chan6);
	cleanChannel(Chan7);
	cleanChannel(Chan8);
	cleanChannel(Chan9);
	cleanChannel(Chan10);
	cleanChannel(Chan11);
	cleanChannel(Chan12);
	cleanChannel(Chan13);
}

function fixChannel(input){
	input.fetchMessages({ limit: 50 }).then(msgs => {
				msgs.forEach(function(msg){
					if(msg.attachments.size > 0){
						react(msg);
					}
				})
	})
}

function cleanChannel(input){
	input.fetchMessages({ limit: 50 }).then(msgs => {
				msgs.forEach(function(msg){
					if(msg.attachments.size > 0){
					} else {
						msg.delete();
					}
				})
	})
}

function GameBar(){
    client.user.setPresence({
        game: {
            name: "Adding reactions / "+client.users.size+" users on HFR!",
            type: 0
        }
    });
}

client.on('message', (msg) => {
	var allowedChannelsArray = ["469603172676272148","469603233514651648","469603216565207040","469603840841482252","469603824705732619","469603799624056843","469603840841482252","469603824705732619","469603799624056843","469603247233957893","469603267828252672","469603859568918538","469603894301818881","469604582184452116","469604622269677578","469604672915636235"];
	allowedChannelsArray.find(element => {
        if (msg.channel.id === element) {
	if (msg.attachments.size > 0) {
            react(msg);
				}
		if(msg.content == "!fix"){
			if(msg.member.hasPermission('ADMINISTRATOR')){
				msg.delete();
				msg.channel.fetchMessages({ limit: 50 }).then(msgs => {
				msgs.forEach(function(msg){
					if(msg.attachments.size > 0){
						react(msg);
					}
				})
				})
			}
		}
    if(msg.content == "!vi"){
		if(msg.member.hasPermission('ADMINISTRATOR')){
			// verify images
			msg.channel.fetchMessages({ limit: 100 }).then(msgs => {
				msgs.forEach(function(msg){
					if(msg.attachments.size > 0){
				var argsM = msg.createdAt.toString().split(" ");
				var dateObj = new Date();
				var n = dateObj.getUTCDate();
				if(+argsM[2]+7 > 29){
					var jours = n + ( 29 - +argsM[2]); // JOUR + 7 > 29
					console.log("Jours au dessus de 29: "+jours);
				} else {
					var jours = n - +argsM[2];
					console.log("Jour en dessous de 29: "+jours); // JOUR + 7 < 29
				}
				 if(jours > 6){ // 1 = jour actuel, 2 = jour de l'image
					 //Check ratings
					 
					var NbZero = +msg.reactions.find(reaction => reaction.emoji.id == "469736145224204298").count - 1;
					var NbVingt = +msg.reactions.find(reaction => reaction.emoji.id == "469736164639637504").count - 1;
					var NbQuarante = +msg.reactions.find(reaction => reaction.emoji.id == "469736177981718535").count - 1;
					var NbSoixante = +msg.reactions.find(reaction => reaction.emoji.id == "469736192007471111").count - 1;
					var NbQuatrevingt = +msg.reactions.find(reaction => reaction.emoji.id == "469736204514885644").count - 1;
					var NbCent = +msg.reactions.find(reaction => reaction.emoji.id == "469736216494080001").count - 1;
					var Total = NbZero+NbVingt+NbQuarante+NbSoixante+NbQuatrevingt+NbCent;
					var TotalValeur = (NbZero)+(NbVingt*20)+(NbQuarante*40)+(NbSoixante*60)+(NbQuatrevingt*80)+(NbCent*100);
					var Moyenne = TotalValeur/Total;
					console.log("Moyenne: "+Moyenne);
					if(Moyenne < 60){
						msg.delete();
					}
					} else {
						console.log("Pas d'images de plus de 6 jours.");
					}
                } else {
                    msg.delete();
					}
				})
			})
		} else {
			msg.channel.send("You don't have the permission to execute that command!");
			}
		}
	}
	})
})

function react(input) {
    input.react("469736145224204298").then( () => input.react("469736164639637504")).then( () => input.react("469736177981718535")).then( () => input.react("469736192007471111")).then( () => input.react("469736204514885644")).then( () => input.react("469736216494080001"));
}
