#!/usr/bin/env node
import inquirer from "inquirer";
// 1) computer guessing number - done.
// 2) user guessing number - done .
// 3) compair user input with computer genreated number 
const ramdomNnuber = Math.floor(Math.random() * 5 + 1);
const guessedNumber = await inquirer.prompt([
    {
        name: 'userGuessedNumber',
        type: 'number',
        message: 'Please guess a number between (1 To 5)'
    }
]);
if (guessedNumber.userGuessedNumber === ramdomNnuber) {
    console.log('congtratulation! you guess a right number');
}
else {
    console.log('You guess a worng number');
}
