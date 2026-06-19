module.exports = {
  name: 'guildMemberAdd',

  async execute(member) {
    const channelId = '1517271712645775573';

    const channel = member.guild.channels.cache.get(channelId);

    if (!channel) return;

    channel.send(`👋 Benvenuto ${member} nel server!`);
  }
};
