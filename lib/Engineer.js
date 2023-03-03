// Defining and exporting the Engineer class.  
// This class inherits from Employee
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    getGithub() {
        return this.github
    };

    getRole() {
        return "Engineer"
    }; // Returns the Engineer information
};

module.exports = Engineer;