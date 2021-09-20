const Pusher = require('./../../lib/pusher');

module.exports = async (req, res) => {
  const { message, username } = req.body;

  await Pusher.trigger("presence-channel", "chat-update", {
    message,
    username
  });

  res.json({ status: 200 });
}
