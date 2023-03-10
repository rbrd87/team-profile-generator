// Defining and exporting the Manager class.  
// This class inherits from Employee
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return "Manager"
    }; // Returns the Manager information
};

module.exports = Intern;