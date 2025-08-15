# Discord Bot Project Overview

This project showcases a Discord bot developed using JavaScript. The bot is designed to enhance user interaction on Discord servers by providing various commands and functionalities.

## Features

- **Ping Command**: A simple command that responds with "Pong!" to check if the bot is active.
- **Custom Commands**: Ability to add more commands as needed.
- **Event Handling**: Listens to events such as messages and user interactions.

## Getting Started

To get started with the Discord bot, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/simon-portfolio.git
   cd simon-portfolio/projects/discord-bot
   ```

2. **Install Dependencies**:
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Set Up Your Bot Token**:
   Create a `.env` file in the root of the `discord-bot` directory and add your bot token:
   ```
   DISCORD_TOKEN=your_bot_token_here
   ```

4. **Run the Bot**:
   Start the bot using the following command:
   ```bash
   node bot.js
   ```

## Project Structure

- `bot.js`: The main file that initializes the bot and handles events.
- `commands/ping.js`: Contains the implementation of the ping command.
- `package.json`: Lists the dependencies and scripts for the bot.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or additional features.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.