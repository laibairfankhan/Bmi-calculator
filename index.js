import inquirer from "inquirer";
import chalk from "chalk";
const userAnswer = await inquirer.prompt([
    {
        message: "Enter your weight in kg",
        type: "number",
        name: "weight",
    },
    {
        message: "Enter your height in meters",
        type: "number",
        name: "height",
    },
]);
const weight = userAnswer.weight;
const height = userAnswer.height;
const BMI = userAnswer.weight / (userAnswer.height * userAnswer.height);
console.log("Your BMI is:", chalk.bgCyanBright(BMI));
if (BMI < 18.5) {
    console.log(chalk.bgBlueBright("you are under weight"));
}
else if (BMI < 24) {
    console.log(chalk.bgGreenBright("you are normal weight"));
}
else if (BMI < 30) {
    console.log(chalk.bgRedBright("you are over weight"));
}
else
    (chalk.bgCyanBright("you are obese"));
