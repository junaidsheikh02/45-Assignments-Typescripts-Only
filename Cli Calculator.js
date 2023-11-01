#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function promptUser() {
    return __awaiter(this, void 0, void 0, function* () {
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
        const answers = yield inquirer_1.default.prompt(questions);
        return answers;
    });
}
function performOperation(num1, num2, operation) {
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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Welcome to the CLI Calculator!\n');
        const { num1, num2, operation } = yield promptUser();
        const result = performOperation(num1, num2, operation);
        console.log(`\nResult: ${result}\n`);
    });
}
main();
