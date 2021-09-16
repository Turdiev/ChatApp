// import { pusher } from './../../../lib/pusher'
const Pusher = require('./../../../lib/pusher');

const express = require("express")
const router = express.Router();

router.post("/pusher/auth", async (req, res) => {
  const socket_id = await req.body.socket_id;
  const channel_name = await req.body.channel_name;
  const username = await req.body.username;

  console.log('LOG',typeof(socket_id), typeof(channel_name), typeof(username));

  const randomString = Math.random().toString(36).slice(2)

  const presenceDate = {
    user_id: randomString,
    user_info: {
      username: "@" + username
    }
  }

  try {
    const auth = Pusher.authenticate(`${socket_id}`, channel_name, presenceDate)
    res.send(auth)
  } catch (error) {
    console.error(error)
  }
});

module.exports = router;
