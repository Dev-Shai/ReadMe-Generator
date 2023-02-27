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
        name: 'demo',    
        message: 'Where can a demo of your app be found?',
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
        type: 'checkbox',
        choices: ['Apache 2.0 License', 'The Artistic License 2.0', 'GNU General Public License', 'MIT License', 'Mozilla Public License', 'Perl License'],
        name: 'license',    
        message: 'What license is your app under?',
    }
    ];

    // .then((userInput) => {
    //     const fileContents = getHTML(userInput);
    
    // making the fs writetofile to a function. So that I can call it later
    function writingToFile(fileName, data) {
        fileName = const fileNamed = `${data.title.toLowerCase().split(' ').join('')}.md`;
        fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) => 
        err ? console.log(err) : console.log("Your ReadME has been saved!")
        );
    }

    // .then((data) => {
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    
    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //     err ? console.log(err) : console.log('Success!')
    // );
    // });    

// function to initialize program need to include the inquirer and fs here. Need to use make a newfile using writetofile function and generatemarkdown function 
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        let newReadme = generateMarkdown(data);
        writingToFile("data.title", newReadme)
    })
}

// function call to initialize program
init();


// using inquirer to ask the questions

// using fs to create the file 

// use generatemarkdown to create the markdown (likely to require fs here?)

//use path to record and log the paths of generated markdowns

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