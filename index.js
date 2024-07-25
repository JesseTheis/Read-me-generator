// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./');
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is your first Name?",
    name: "title"
},
{
    type: 'input',
    message: 'Please provide description of your project',
    name: 'description'
},
{
    type: "list",
    message: "Which is your favorite Pokemon?",
    choices: ["Bulbasaur", "Charmander", "Squirtle"],
    name: "pokemon",
},
{
    type: 'input',
    message: 'Please provide installation instructions',
    name: 'installation'

},
{
    type: 'input',
    message: 'Please provide usage information',
    name: 'usage'
},
{
    type: 'input',
    message: 'Please provide contribution guidelines',
    name: 'contributing'
},
{
    type: 'input',
    message: 'Please provide test instructions',
    name: 'tests'
},
{
    type: 'list',
    message: 'Please choose a license',
    choices: ['MIT', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    name: 'license'
},
{
    type: 'input',
    message: 'Please provide your GitHub username',
    name: 'github'
},
{
    type: 'input',
    message: 'Please provide your email address',
    name: 'email'

},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("readMe.txt", JSON.stringify(answers, null, "\t"), function(err){
        console.log(err ? err : "Success!")
})}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers){
        console.log("answers",answers);
        writeToFile("readMe.txt", answers);
    })
}

// Function call to initialize app
init();
