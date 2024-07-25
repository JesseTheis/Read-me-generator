// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
} else if (license === 'APACHE 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
} else if (license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
} else if (license === 'BSD 3-Clause') {
  return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]';
} else {
  return '';
 }
}

const licenseBadges = {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)'
} else if (license === 'APACHE 2.0') {
    return '[APACHE 2.0](https://opensource.org/licenses/Apache-2.0)'
} else if (license === 'GPL 3.0') {
    return '[GPL 3.0](https://www.gnu.org/licenses/gpl-3.0)'
} else if (license === 'BSD 3-Clause') {
  return '[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)'
} else {
  return '';
 }

// function renderLicenseLink(license) {
//   if (!license) {
//     return '';
//   } else {
//     // Assuming license is a string that can be used to construct the URL
//     return 'https://example.com/licenses/' + license;
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    // Code to generate the license section goes here
    return 'Project lisenced under ' + license;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${data.title}

  ## Description
  ${data.description}
  ##Pokemon
  ${data.pokemon}
  ## Installation
  ${data.installation}
  ## Table of Contents
     *[Installation](#installation)
      *[Usage](#usage)
      *[License](#license)
      *[Contributing](#contributing)
      *[Tests](#tests)
      *[Questions](#questions)
      *[GitHub](#github)
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## License
  ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}
  ## GitHub
   my GitHub username is ${data.github} here is the link to my profile [GitHub Profile]()
  ## Questions
   If you have any questions please do not hesitate to email me at ${data.email} thank you!
`;
}}

module.exports = generateMarkdown;
