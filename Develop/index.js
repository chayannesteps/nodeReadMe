// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
{
type: 'input',
name: 'github',
message: 'What is your github username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
},
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},
{
    type: 'input',
    name: 'description',
    message: 'What does your project do?'
},
{
    type: 'input',
    name: 'motivation',
    message: 'What was the movtivation you had to make this project?'
},
{
    type: 'list',
    name: 'license',
    message: 'Enter the name of your license here:',
    choices: license
},
{
    type: 'input',
    name: 'usage',
    message: 'How do you use this project?'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(),  fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        console.log('Generate README...');
        writeToFile('README.md', generateMarkdown({ ...response }));
    })
}

// Function call to initialize app
init();

