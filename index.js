const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// 




// array of questions for user
const questions = [
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where do you live?',
    },
    {
        type: 'input',
        name: 'bio',    
        message: 'Write a little bit about yourself',
    },
    {
        type: 'input',
        name: 'linkedin',    
        message: 'What is your LinkedIn username?',
    },
    {
        type: 'input',
        name: 'github',    
        message: 'What is your GitHub username',
    },
    ])
    .then((userInput) => {
        const fileContents = getHTML(userInput);
    
        fs.writeFile("index.html", fileContents, (err) => 
        err ? console.log(err) : console.log("Success!")
        );
    })
    
    // .then((data) => {
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    
    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //     err ? console.log(err) : console.log('Success!')
    // );
    // });    
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

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