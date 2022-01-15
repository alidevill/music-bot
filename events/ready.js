module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("Music By d.", {
    type: "LISTENING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};
