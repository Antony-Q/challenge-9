// packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// Link to page where the README is created and stored
const generatePage = require('./utils/generateMarkdown.js');

// an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type:"input",
            name:"title",
            message:"What is the title of this project?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false; 
                }
            }
        },
        {
            type:"input",
            name:"contributors",
            message:"Who are the contributors?"
        },
        {
            type:"input",
            name:"contributing",
            message:"Detail the contribution guidelines."
        },
        {
            type:"input",
            name:"description",
            message:"Give a brief description of the project.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false; 
                }
            }
        },
        {
            type:"input",
            name:"installation",
            message:"Describe the installation instructions.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter steps required to install your project!');
                    return false; 
                }
            }
        },
        {
            type:"input",
            name:"usage",
            message:"How is this app used?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a usage description!');
                    return false; 
                }
            }
        },
        {
            type: "checkbox", 
            name: "license",
            message: "Pick your License.",
            choices: ["MIT", "GPLv3", "GPL"],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please choose a license!');
                    return false; 
                }
            }
        },
        {
            type:"input",
            name:"tests",
            message:"Detail the instructions for testing the program/project."
        },
        {
            type:"input",
            name:"github",
            message:"What is your Github username?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false; 
                }
            }
        },
        {
            type:"input",
            name:"email",
            message:"What is your email address?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false; 
                }
            }
        },
    ]);
};
// function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // Error contingency
        if (err) {
            console.log(err);
            return;

        // successful creation contingency
        } else {
            console.log("Successfully created.")
        }
    })
};

// function to initialize app
questions()
.then(answers => {
    return generatePage(answers);
})

// display data on page
.then(data => {
    return writeFile(data);
})

// error contingency
.catch(err => {
    console.log(err)
})

// function call to initialize app
init();