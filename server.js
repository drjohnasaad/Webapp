const express = require('express');
const bodyParser = require('body-parser');
const { Telegraf } = require('telegraf');

const app = express();
const port = process.env.PORT || 3000;
const { Telegraf } = require('telegraf');

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const botToken = 'YOUR_BOT_TOKEN';
const bot = new Telegraf(botToken);

// Use the Telegraf middleware to handle the /send-message route
app.use(bodyParser.json());
app.post('/send-message', (req, res) => {
    try {
        // Replace 'TARGET_CHAT_ID' with the actual chat ID where you want to send messages
        const chatId = 'TARGET_CHAT_ID';
        const message = 'Hello from the web app!';

        // Use the bot to send a message
        bot.telegram.sendMessage(chatId, message);

        res.json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, message: 'Error sending message' });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Start the Telegram bot
bot.launch();
