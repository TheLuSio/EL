const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('annuncio')
    .setDescription('Invia un annuncio')
    .addStringOption(option =>
      option.setName('testo')
        .setDescription('Cosa vuoi scrivere')
        .setRequired(true)
    ),

  async execute(interaction) {
    const testo = interaction.options.getString('testo');

    const channelId = '1517271712645775574';

    const channel = interaction.client.channels.cache.get(channelId);

    if (!channel) {
      return interaction.reply({ content: 'Canale non trovato', ephemeral: true });
    }

    await channel.send(`📢 **ANNUNCIO**\n${testo}`);

    await interaction.reply({ content: '✅ Annuncio inviato', ephemeral: true });
  }
};
