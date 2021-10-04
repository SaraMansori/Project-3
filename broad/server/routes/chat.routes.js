const Chat = require("../models/Chat.model");

const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
  res.send('Chat server up and running')
})

router.get('/user-chats', (req, res) => {

  const id = req.session.currentUser._id

  Chat
    .find({ participants: id })
    .then(chats => res.status(200).json(chats))
    .catch(err => res.status(500).json({ code: 500, message: "Error retrieving chat requests", err }))

})

router.post('/create/:userId', (req, res) => { })
router.post('/delete/:chatId', (req, res) => { })

module.exports = router
