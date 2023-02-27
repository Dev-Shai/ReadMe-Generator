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
  
  Preview of and Link to my Completed Task
  ![preview of the website](./W6_Screenshot_Submission.png)
  Link to live URL: https://dev-shai.github.io/W6_Code_Quiz/
  
  ## Installation
  ${data.title}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  
  ### License Badges
  ${data.licenseLogo}
  
  ## Contributing
  ${data.title}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions you can:
  -  Visit the associated GitHub profile here: INSERT
  -  Send an email to the following email address: INSERT
  ---  
`;
}

function licenseBadge(data) {
  let licenseLogo = ""
  const license = data.license
switch (license) {
  case "Apache 2.0 License":
      // case is used to compare the value of a variable to a value that might match the value of the variable. If there is a match, the associated block of code is executed.
    badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        //break is used to terminate a case in a switch statement. If break is omitted, the next case statement is executed.
    break;
  case "The Artistic License 2.0":
    badge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
    break;
  case "GNU General Public License":
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    break;
  case "MIT License":
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    break;
  case "Mozilla Public License":
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    break;
  case "Perl License":
    badge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
    break;
  default:
    badge = ""
    break;
}

return licenseLogo;
}

module.exports = generateMarkdown;