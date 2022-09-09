// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// use the url of a liscense on github to render the license type
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// return null if no license, if there is return a quote
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// return a template literal return `#License ${license}`
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown({github, email, title,description, motivation, usage, license}) {
  return `
# ${title}

## Description

This project ${description}

## Table of Contents 


- [Motivation](#motivation)
- [Usage](#usage)
- [Credits/Creator](#credits)
- [License](#license)

## Motivation

The motivation behind creating this project was ${motivation}

## Usage
You use this project ${usage}


## Credits/Creator
The creator of this project was Chayanne Stephen, with the help of some instructors. My email is ${email} and my github account is ${github}


## License

The license that this project uses is ${license}

`;
}

module.exports = generateMarkdown;
