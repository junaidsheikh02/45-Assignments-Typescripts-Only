#!/usr/bin/env node

import inquirer from 'inquirer';

async function promptUser() {
  const questions = [
    {
      type: 'number',
      name: 'num1',
      message: 'Enter the first number:',
    },
    {
      type: 'list',
      name: 'operation',
      message: 'Select an operation:',
      choices: ['Addition (+)', 'Subtraction (-)', 'Multiplication (*)', 'Division (/)'],
    },
    {
      type: 'number',
      name: 'num2',
      message: 'Enter the second number:',
    },
  ];

  const answers = await inquirer.prompt(questions);
  return answers;
}

function performOperation(num1: number, num2: number, operation: string) {
  switch (operation) {
    case 'Addition (+)':
      return num1 + num2;
    case 'Subtraction (-)':
      return num1 - num2;
    case 'Multiplication (*)':
      return num1 * num2;
    case 'Division (/)':
      if (num2 === 0) {
        return 'Cannot divide by zero';
      }
      return num1 / num2;
    default:
      return 'Invalid operation';
  }
}

async function main() {
  console.log('Welcome to the CLI Calculator!\n');

  const { num1, num2, operation } = await promptUser();
  const result = performOperation(num1, num2, operation);

  console.log(`\nResult: ${result}\n`);
}

main();

