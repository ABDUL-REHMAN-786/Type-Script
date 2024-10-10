SIMPLE-CALCULATOR
Calculator Practice

This project is a Command Line Interface (CLI) calculator implemented in TypeScript, utilizing the inquirer library for handling user input. Follow the steps below to set up and run the project.

Prerequisites

• Node.js installed on your system • Basic understanding of TypeScript and npm

Steps to Set Up the Project

Initialize a New npm Project o Run the following command to create a new npm project: o npm init -y

Generate a TypeScript Configuration File o Initialize TypeScript in your project: o tsc --init

Install the Inquirer Library o Add inquirer to your project for collecting user input: o npm i inquirer

Install Types for Inquirer o Since we are using TypeScript, install the types for inquirer: o npm i --save-dev @types/inquirer

Configure TypeScript (tsconfig.json) o Edit your tsconfig.json to include the following configurations: o { o "compilerOptions": { o "target": "ES2022", o "module": "NodeNext", o "moduleResolution": "NodeNext" o } }

Update package.json Configuration o Modify these lines of code in your package.json: o { o "name": "@your-npm-usernmae/calculator", o "main": "index.js", o "type": "module", o "publishConfig": { o "access": "public" o }, o "bin": { o "calculator": "./index.js" o }, }

Implement the CLI Calculator o Start your calculator code in index.ts. At the top of this file, include the shebang: #! /usr/bin/env node

Compile TypeScript to JavaScript o Compile your TypeScript file (index.ts) to JavaScript using: o tsc

Run Your Project o Execute your CLI calculator with: o node index.js

Publishing Your Project on npm To make your CLI calculator accessible to others, follow these steps to publish your project on npm:

Log in to npm o If you haven't already, you will need to create an npm account npmjs.com. Once you have your account set up, log in to npm from your command line: o npm login o Enter your username, password, and email address as prompted.

Publish Your Package o Publish your package to npm, ensuring it is available publicly: o npm publish

Conclusion By following these steps, you will have set up a simple yet functional CLI calculator using TypeScript and the inquirer library. This project not only demonstrates basic usage of TypeScript and npm but also introduces handling user inputs in a CLI environment.