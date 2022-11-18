// employee constructor
const Employee = require("./Employee");

// extends employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee constructor 
        super (name, id, email);

        this.github = github; 
    }
    // return github from input
    getGithub () {
        return this.github;
    }
    // override employee to engineer
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer; 