// Defining and exporting the Intern class.  
// This class inherits from Employee
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school
    }

    getRole() {
        console.log("Intern");
        return "Intern"
    }; // Returns the Intern information
};

module.exports = Intern;