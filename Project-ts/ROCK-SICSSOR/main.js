"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = __importStar(require("inquirer"));
const chalk = __importStar(require("chalk"));
// Enum representing the choices
var Choice;
(function (Choice) {
    Choice["ROCK"] = "rock";
    Choice["PAPER"] = "paper";
    Choice["SCISSORS"] = "scissors";
    Choice["EXIT"] = "exit";
})(Choice || (Choice = {}));
// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }
    else if ((userChoice === Choice.ROCK && computerChoice === Choice.SCISSORS) ||
        (userChoice === Choice.PAPER && computerChoice === Choice.ROCK) ||
        (userChoice === Choice.SCISSORS && computerChoice === Choice.PAPER)) {
        return 'You win!';
    }
    else {
        return 'Computer wins!';
    }
}
// Main game loop
async function gameLoop() {
    while (true) {
        const userInput = await inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Choose your move:',
                choices: [
                    Choice.ROCK,
                    Choice.PAPER,
                    Choice.SCISSORS,
                    new inquirer.Separator(),
                    Choice.EXIT
                ]
            }
        ]);
        const userChoice = userInput.choice;
        // Exit if user chooses to
        if (userChoice === Choice.EXIT) {
            console.log(chalk.yellow('Thanks for playing! Goodbye.'));
            process.exit(0);
        }
        // Randomly generate computer's choice
        const computerChoice = [Choice.ROCK, Choice.PAPER, Choice.SCISSORS][Math.floor(Math.random() * 3)];
        console.log(chalk.cyan(`You chose: ${userChoice}`));
        console.log(chalk.cyan(`Computer chose: ${computerChoice}`));
        const result = determineWinner(userChoice, computerChoice);
        console.log(chalk.green(result));
        console.log('-------------------------------------------');
    }
}
// Start the game
gameLoop().catch(err => console.error(err));
