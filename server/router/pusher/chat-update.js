// import { pusher } from "./../../lib/pusher";
const { pusher } = require('./../../lib/pusher');

module.exports = async (req, res) => {
  const { message, username } = req.body;

  await pusher.trigger("presence-channel", "chat-update", {
    message,
    username
  });

  res.json({ status: 200 });
}
