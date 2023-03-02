// Defining and exporting the Engineer class.  
// This class inherits from Employee
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    getGitHub() {
        return this.github
    };

    getRole() {
        console.log("Engineer")
        return "Engineer"
    }; // Returns the Engineer information
};

module.exports = Engineer;