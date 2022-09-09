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
},{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
},{
    type: 'list',
    name: 'license',
    message: 'What is the name of the license you are using?'
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

// questions = [{name: 'Mlemke24'}, {email: 'mattrlemke@gmail.com}, ]

// questions.name