#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    }); // We have set a Promse for 3 sec
};
async function greetings() {
    console.log("\n");
    let neonTitle = chalkAnimation.neon("\t___Let's Do Some Math!___");
    await sleep();
    neonTitle.stop();
    console.log(chalk.red(`
  \t _____________________
  \t| Nauman's Calculator |
  \t|  _________________  |
  \t| |              0. | |
  \t| |_________________| |
  \t|  ___ ___ ___   ___  |
  \t| | 7 | 8 | 9 | | + | |
  \t| |___|___|___| |___| |
  \t| | 4 | 5 | 6 | | - | |
  \t| |___|___|___| |___| |
  \t| | 1 | 2 | 3 | | x | |
  \t| |___|___|___| |___| |
  \t| | . | 0 | = | | / | |
  \t| |___|___|___| |___| |
  \t|_____________________|
 `));
    console.log("\n");
}
greetings();
// ==========================================================================
/* Now we will ask the user to select the operation they want to perform. For that we will use inquirer library.*/
// Below code sourced from https://www.npmjs.com/package/inquirer?activeTab=readme
async function DisplayQuestion() {
    await sleep();
    return new Promise((resolve) => {
        inquirer
            .prompt([
            {
                type: "list",
                name: "Operations",
                message: chalk.yellowBright.underline("Which Operations would you like to perform?\n"),
                choices: ["Addition", "Subtraction", "Multiplication", "Division"],
            },
            {
                type: "number",
                name: "num1",
                message: "Enter 1st Number: ",
                validate: (ans) => {
                    if (!ans) {
                        return "Please Provide a Valid Number";
                    }
                    return true;
                },
            },
            {
                type: "number",
                name: "num2",
                message: "Enter 2nd Number: ",
                validate: (ans) => {
                    if (!ans) {
                        return "Please Provide a Valid Number";
                    }
                    return true;
                },
            },
            /* Pass your questions in here */
        ])
            .then((answers) => {
            if (answers.Operations == "Addition") {
                console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
            }
            else if (answers.Operations == "Subtraction") {
                console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
            }
            else if (answers.Operations == "Multiplication") {
                console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
            }
            if (answers.Operations == "Division") {
                console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
            }
            // console.log(answers);
            resolve("Done");
        });
    });
}
async function redo() {
    do {
        await DisplayQuestion();
        var Myloop = await inquirer.prompt({
            type: "input",
            name: "Redo",
            message: "Do you want to perform another operation? if YES press (y) if NO press (n).",
        });
    } while (Myloop.Redo === "y" || Myloop.Redo === "Y");
}
redo();
