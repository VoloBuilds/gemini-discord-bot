# NodeJS Discord Bot Using the new Google Gemini API

In this repo we integrate Discord.js with the new Google Gemini API. The bot operates within Discord channels, listening to messages and using Gemini to generate responses.

## Video Guide
View the full tutorial and explanation of concepts here:
https://youtu.be/tMZTaAPfqAI

## Features

- **Discord Integration**: The bot listens to messages in Discord channels.
- **Gemini Response Generation**: Leverages the new Google Gemini API to create responses to messages.

## Prerequisites

- Node.js installed on your machine.
- A Discord bot token (from Discord Developer Portal).
- A Google AI API key (https://makersuite.google.com/app/apikey)

## Installation

1. **Clone the Repository**:
   ```
   git clone [repository-url]
   ```
2. **Navigate to the Repository Folder**:
   ```
   cd gemini-discord-bot
   ```
3. **Install Dependencies**:
   ```
   npm install
   ```

## Configuration

1. **Set Up Environment Variables**:
   Create a `.env` file in the root of your project with the following variables:
   ```
   DISCORD_TOKEN=your_discord_bot_token
   GEMINI_API_KEY=your_gemini_api_key
   ```

## Running the Bot

1. **Start the Bot**:
   ```
   node bot.js
   ```
   OR
   ```
   nodemon bot.js
   ```

## Usage

- **Interaction**: Simply type and send messages in your Discord server where the bot is added. The bot will automatically generate and send replies based on the Gemini model's output.
- **Discord Channels**: Works in any text channel or thread where the bot has permissions to read and send messages.

## Contributing

Feel free to fork the repository and submit pull requests.

## License

MIT
