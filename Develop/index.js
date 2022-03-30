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
            message:"What is the title of this project?"
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
            message:"Give a brief description of the project."
        },
        {
            type:"input",
            name:"installation",
            message:"Describe the installation instructions."
        },
        {
            type:"input",
            name:"usage",
            message:"Describe how this project may be used."
        },
        {
            type: "checkbox", 
            name: "license",
            choices: ["MIT", "GPLv3", "GPL"],
            message: "Pick your License."
        },
        {
            type:"input",
            name:"tests",
            message:"Detail the instructions for testing the program/project."
        },
        {
            type:"input",
            name:"github",
            message:"What is your Github username?"
        },
        {
            type:"input",
            name:"email",
            message:"What is your email address?"
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