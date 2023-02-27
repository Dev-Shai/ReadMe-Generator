// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.desc}
  
  ## Table of Contents
  - [Project Title](#project-title)
    - [Description](#description)
    - [Table of Contents](#table-of-contents)
    - [Demo](#Demo)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
      - [License Badges](#license-badges)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
  ## Demo
  ${data.demo}
  Link to the deployed application: https://www.github.com/${data.github}/${data.repo}
  Link to live URL: https://${data.github}.github.io/${data.repo}/
  
  ## Installation
  ${data.title}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ### License Badges
  
  ${licenseLogo(data)}

  ## Contributing
  ${data.title}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions you can:
  -  Visit the associated GitHub profile here: https://www.github.com/${data.github}
  -  Send an email to the following email address: ${data.email}
  ---  
`;
}

function licenseLogo(data) {
  let license = data.license;
  let logo = "";
switch (license) {
  case "Apache 2.0 License":
      // case is used to compare the value of a variable to a value that might match the value of the variable. If there is a match, the associated block of code is executed.
    logo = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        //break is used to terminate a case in a switch statement. If break is omitted, the next case statement is executed.
    break;
  case "The Artistic License 2.0":
    logo = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
    break;
  case "GNU General Public License":
    logo = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    break;
  case "MIT License":
    logo = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    break;
  case "Mozilla Public License":
    logo = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    break;
  case "Perl License":
    logo = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
    break;
  default:
    logo = "No License";
    break;
}

return logo;
}

module.exports = generateMarkdown;