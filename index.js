// Packages needed to run the command line application
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Pulling in the classes from the lib folder
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Using path to create a directory and create a html page
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Rendering the html page using the page-template provided
const render = require("./src/page-template.js");

// Empty array to store the employees
const employees = [];

// Gathering information about the development team members, and rendering the HTML file.
const nameQuestion = {
    type: "input",
    message: "What is your name?",
    name: "name",
    validate(name) {
        if (!/[a-zA-Z]+$/.test(name)) {
            return "Please only use letters";
        }
        return true;
    }
};

const idQuestion = {
    type: "input",
    message: "What is your employee ID?",
    name: "id",
    validate(id) {
        if (/[a-zA-Z]+$/.test(id)) {
            return "Please only use numbers";
        }
        return true;
    }
};

const emailQuestion = {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate(email) {
        if (!/[@]/.test(email) || !/[.]/.test(email)) {
            return "Please enter a valid email address";
        }
        return true;
    }
};

const officeQuestion = {
    type: "input",
    message: "What is your office number?",
    name: "office",
    validate(office) {
        if (/[a-zA-Z]+$/.test(office)) {
            return "Please only use numbers";
        }
        return true;
    }
};

const githubQuestion = {
    type: "input",
    message: "What is your github username?",
    name: "github",
    validate(github) {
        if (/[a-zA-Z]+$/.test(github)) {
        }
        return true;
    }
};

const schoolQuestion = {
    type: "input",
    message: "What school do you attend?",
    name: "school",
    validate(school) {
        if (!/[a-zA-Z]+$/.test(school)) {
            return "Please only use letters";
        }
        return true;
    }
};

// Function to ask the user if they wish to add further team members
nextEmployee = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "nextEmployee",
                message: "Do you wish to add another employee?",
                choices: [
                    "Engineer",
                    "Intern",
                    "No, I'm finished"],
            },
        ])
        // IF statement to determine which questions are asked depending on the users choice
        .then((answer) => {
            if (answer.nextEmployee === "Engineer") {
                askEngineerQuestions();
            } else if (answer.nextEmployee === "Intern") {
                askInternQuestions();
            } else {
                writeToFile(outputPath, OUTPUT_DIR, render(employees));
            }
        });
}

// Functions to store the question answers and push to the employees array
// askManagerQuestions is called first with the relevant questions
askManagerQuestions = () => {
    inquirer
        .prompt([
            nameQuestion,
            idQuestion,
            emailQuestion,
            officeQuestion
        ])
        .then((response) => {
            const newManager = new Manager(
                response.name,
                response.id,
                response.email,
                response.office
            );
            employees.push(newManager);
            console.log("=====================")
            nextEmployee(); // We then call the nextEmployee function last, to ask the user if they want to add further employees
        });
};

// askEngineerQuestions is called if the user wants to add an engineer
askEngineerQuestions = () => {
    inquirer
        .prompt([
            nameQuestion,
            idQuestion,
            emailQuestion,
            githubQuestion
        ])
        .then((response) => {
            const newEngineer = new Engineer(
                response.name,
                response.id,
                response.email,
                response.github
            );
            employees.push(newEngineer);
            console.log("=====================")
            nextEmployee();
        });
};

// askInternQuestions is called if the user wants to add an intern
askInternQuestions = () => {
    inquirer
        .prompt([
            nameQuestion,
            idQuestion,
            emailQuestion,
            schoolQuestion
        ])
        .then((response) => {
            const newIntern = new Intern(
                response.name,
                response.id,
                response.email,
                response.school
            );
            employees.push(newIntern);
            console.log("=====================")
            nextEmployee();
        });
};

// A function to check that the OUTPUT_DIR exists - we will pass this into the writeToFile function
// If the directory doesn't exist it will create it
const directoryCheck = (directory) => {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }
};

// This function firstly checks the OUTPUT_DIR passed from the nextEmployee function - creates the directory if needed
// It will then render an HTML file using the employee array as the data
const writeToFile = (fileName, directory, data) => {
    directoryCheck(directory);
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Success!"));
}

// Function to initialize program using arrow function
const init = () => {
    askManagerQuestions();
}

init();