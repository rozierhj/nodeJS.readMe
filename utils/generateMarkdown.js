// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'Apache 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    
    case 'Boost 1.0':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://opensource.org/license/bsl-1-0)`;
      
    case 'BSD 3-Clause':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      
    case 'MPL 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      
    case 'ISC':
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      
    case 'IBM':
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    
    case 'GNU GPL v3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

      default:
        return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //link inckuded in the renderLicenseBadge function
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ${renderLicenseBadge(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
    ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)  

  ## Installation
    ${data.installation}

  ## Usage

  #### [link to the application webpage (if applicable)](${data.link})
  #### [link to the git repository](${data.repOlink})

    ${data.usage}

  ## License
    ${renderLicenseSection(data.license)}

  ## Contributing
    ${data.credits}

  ## Tests
    ${data.test}

  ## Questions
    Github user page: https://github/${data.gitHubUser}
    For more information, you can email at: ${data.email}
  
`;
}

module.exports = generateMarkdown;
