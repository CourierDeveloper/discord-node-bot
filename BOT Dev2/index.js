const { GatewayIntentBits, Client, EmbedBuilder, Collection } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});
const config = require(`${process.cwd()}/config.json`);
require('colors');

client.on('ready', () => {
  console.log('GS-RP Dev Bot encendido')
})

client.login(config.token)


client.on('messageCreate', async (message) => {
  if(message.author.bot || !message.guild  || message.channel.type == 'dm') return;
  var prefix = config.prefix
 
  if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
          let embed = new EmbedBuilder()
              .setTitle('GS-RP Developer Bot')
              .setDescription(`El ping actual del servidor GS-RP (V) hasta tu router es de: \`$(client.ws.ping}ms\`!`)
              .setColor(client.color)
              message.channel.send({embeds: [embed]})
  }

})

