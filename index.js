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
const managerQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the team member's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the team member's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the team member's email address?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the manager's office number?",
    },
  ];
  const engineerQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the team member's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the team member's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the team member's email address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the team member's GitHub username?",
    },
  ];
  const internQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the team member's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the team member's ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the team member's email address?",
    },
    {
      type: "input",
      name: "school",
      message: "What school does this team member go to?",
    },
  ];