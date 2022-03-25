// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = () =>
    inquirer.prompt([
        {
            type:"input",
            name:"title",
            message:"What is the title of this project?"
        },
        {
            type:"input",
            name:"author",
            message:"Who are the authors?"
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
            type:"input",
            name:"license",
            message:"Enter license information."
        },
        {
            type:"input",
            name:"tests",
            message:"Detail the instructions for testing the program/project."
        },
        {
            type:"input",
            name:"questions",
            message:"List frequently asked questions and their answers."
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
