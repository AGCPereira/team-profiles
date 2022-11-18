// importing employee constructor 
const Employee = require('./Employee');

//intern constructor extends to employee constructor
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }
    //returns school from input
    getSchool () {
        return this.school;
    }
    // overrides employee role to intern
    getRole () {
        return "Intern";
    }
}

module.exports = Intern; 