// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// use the url of a license on github to render the license type
function renderLicenseBadge(license) {
  let badge = '';
  if(license != "None"){
    badge = '![License Badge] (https://shields.io/badge/license-' + license + '-blueviolet'
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// return null if no license, if there is return a quote
function renderLicenseLink(license) {
  let licenseLink;
  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
      case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
      case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-clause"
      break;
    default:
      licenseLink = '';
      break
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// return a template literal return `#License ${license}`
function renderLicenseSection(license) {
  let licenseLink = '';
  if (license != "None") {
    licenseSect += "## License"
    licenseSect += "To get more information about your license, click here: " + renderLicenseLink(license)
  }
}

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
