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
            message:"What is the author's name?"
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
            name:"",
            message:""
        },
        {
            type:"input",
            name:"",
            message:""
        },
        {
            type:"input",
            name:"",
            message:""
        },
        {
            type:"input",
            name:"",
            message:""
        },

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
