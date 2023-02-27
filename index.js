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
        name: 'usage',    
        message: 'What is the usage of your app?',
    },
    {
        type: 'input',
        name: 'contribute',    
        message: 'What are the rules and guidelines for other developers, to contribute to your app?',
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
        message: 'Provide any additional information about your app when demoing it:',
    },
    {
        type: 'input',
        name: 'install',    
        message: 'Provide instructions on how to install your app:',
    },
    {
        type: 'input',
        name: 'tests',    
        message: 'Provide instructions on how to run all necessary tests. It is advised to also explain the libraries used for testing your software and supply all necessary commands:',
    },
    {
        type: 'input',
        name: 'bugs',    
        message: 'Are there any known issues or bugs in your app? If so, please list them:',
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