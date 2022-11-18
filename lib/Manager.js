// importing employee constructor 
const Employee = require('./Employee');

// intern constructor extends to employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor 
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // overrides employee role to manager 
    getRole () {
        return "Manager";
    }
}

module.exports = Manager; 
