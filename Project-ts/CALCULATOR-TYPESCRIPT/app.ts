import inquirer from 'inquirer';
import chalk from 'chalk';

// Function to perform arithmetic operations
function calculate(num1: number, num2: number, operator: string): number {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                throw new Error('Cannot divide by zero!');
            }
            return num1 / num2;
        default:
            throw new Error('Invalid operator!');
    }
}

// Main calculator loop
async function calculatorLoop() {
    while (true) {
        const userInput = await inquirer.prompt([
            {
                type: 'input',
                name: 'num1',
                message: 'Enter the first number:',
                validate: (input: string) => !isNaN(parseFloat(input)) ? true : 'Please enter a valid number.'
            },
            {
                type: 'input',
                name: 'num2',
                message: 'Enter the second number:',
                validate: (input: string) => !isNaN(parseFloat(input)) ? true : 'Please enter a valid number.'
            },
            {
                type: 'list',
                name: 'operator',
                message: 'Choose an operation:',
                choices: ['+', '-', '*', '/']
            },
            {
                type: 'confirm',
                name: 'continue',
                message: 'Do you want to perform another calculation?',
                default: true
            }
        ]);

        const num1 = parseFloat(userInput.num1);
        const num2 = parseFloat(userInput.num2);
        const operator = userInput.operator;

        try {
            const result = calculate(num1, num2, operator);
            console.log(chalk.yellow(`Result: ${num1} ${operator} ${num2} = ${result}`));
        } catch (error) {
(error: Error)=> {
    console.log(error.message);
}
        }

        if (!userInput.continue) {
            console.log('Calculator is exiting. Goodbye!');
            process.exit(0);
        }
    }
}

// Start the calculator
calculatorLoop().catch(err => console.error(err));