const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your app?',
    },
    {
        type: 'input',
        name: 'desc',
        message: 'What is the description of your app?',
    },
    {
        type: 'input',
        name: 'installation',    
        message: 'What are the installation instructions for your app?',
    },
    {
        type: 'input',
        name: 'usage',    
        message: 'What is the usage of your app?',
    },
    {
        type: 'input',
        name: 'github',    
        message: 'Your github username and repo name will be used to generate a link to the demo of your app. Firstly, What is your github username?',
    },
    {
        type: 'input',
        name: 'repo',    
        message: 'Secondly, What is the name of your repo (please write the repo name it as you have on github)?',
    },
    {
        type: 'input',
        name: 'demo',    
        message: 'Provide any additional information about your app when demoing it.',
    },
    {
        type: 'input',
        name: 'email',    
        message: 'What is your email address?',
    },
    {
        type: 'list',
        choices: ['Apache 2.0 License', 'The Artistic License 2.0', 'GNU General Public License', 'MIT License', 'Mozilla Public License', 'Perl License'],
        name: 'license',    
        message: 'What license is your app under?',
    }
    ];
//use path to record and log the paths of generated markdowns. provide a link to the path of the generated markdown in the console log.
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        let newReadme = generateMarkdown(data);
        writingToFile(`${data.title.toLowerCase().split(' ').join('')}.md`, newReadme)
        console.log(`Your ReadMe has been saved to ${path.join(__dirname, `${data.title.toLowerCase().split(' ').join('')}.md`)}`)
    })
}

    // making the fs writetofile to a function. So that I can call it later
    function writingToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log("Your ReadME has been saved!")
        );
    }

// function call to initialize program
init();

// * Create a command-line application that accepts user input.
//   * When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
//     * The title of my project 
//     * Sections entitled:
//       * Description 
//       * Table of Contents 
//       * Installation 
//       * Usage 
//       * License 
//       * Contributing 
//       * Tests 
//       * Questions
//     * When a user enters the project title then it is displayed as the title of the README
//     * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//     * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
//     * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
//     * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
//     * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README