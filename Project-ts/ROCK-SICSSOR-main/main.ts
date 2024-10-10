
import * as inquirer from 'inquirer';
import * as chalk from 'chalk';

// Enum representing the choices
enum Choice {
    ROCK = 'rock',
    PAPER = 'paper',
    SCISSORS = 'scissors',
    EXIT = 'exit'
}

// Function to determine the winner
function determineWinner(userChoice: Choice, computerChoice: Choice): string {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (
        (userChoice === Choice.ROCK && computerChoice === Choice.SCISSORS) ||
        (userChoice === Choice.PAPER && computerChoice === Choice.ROCK) ||
        (userChoice === Choice.SCISSORS && computerChoice === Choice.PAPER)
    ) {
        return 'You win!';
    } else {
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

        const userChoice = userInput.choice as Choice;

        // Exit if user chooses to
        if (userChoice === Choice.EXIT) {
            console.log (chalk.yellow('Thanks for playing! Goodbye.'));
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
