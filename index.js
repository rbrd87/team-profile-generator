const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

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
        return true
    }
};

const idQuestion = {
    type: "input",
    message: "What is your employee ID?",
    name: "name",
    validate(id) {
        if (/[a-zA-Z]+$/.test(id)) {
            return "Please only use numbers";
        }
        return true
    }
};

const emailQuestion = {
    type: "input",
    message: "What is your email address?",
    name: "email",
    validate(email) {
        //simple validation, as emails are super complicated to validate
        if (!/[@]/.test(email) || !/[.]/.test(email)) {
            return "Please enter a valid email address"
        }
        return true
    }
};

const officeQuestion = {
    type: "input",
    message: "What is your office number?",
    name: "office",
    validate(office) {
        if (/[a-zA-Z]+$/.test(office)) {
            return "Please only use numbers"
        }
        return true
    }
};

const githubQuestion = {
    type: "input",
    message: "What is your github username?",
    name: "github",
    validate(github) {
        if (!/[a-zA-Z]+$/.test(github)) {
            return "Please only use letters"
        }
        return true
    }
};

const schoolQuestion = {
    type: "input",
    message: "What school do you attend?",
    name: "school",
    validate(school) {
        if (!/[a-zA-Z]+$/.test(school)) {
            return "Please only use letters"
        }
        return true
    }
};

// Function to store the question answers and push to the employees array
askManagerQuestions = () => {
    inquirer
        .prompt([nameQuestion, idQuestion, emailQuestion, officeQuestion])
        .then((response) => {
            const theManager = new Manager(response.name, response.id, response.email, response.office);
            employees.push(theManager);
        });
}

// init function that calls manager func
function init() {
    askManagerQuestions();
}

init();