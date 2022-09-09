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
function generateMarkdown(data) {
  return `
  
  # ${data.github}

  ## ${data.description}
  
${renderLicenseBadge(data.license)}


`;
}

module.exports = generateMarkdown;
