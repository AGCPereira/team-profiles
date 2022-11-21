const generateHTML = require('./src/generateHTML');
const fs = require('fs'); 
const inquirer = require('inquirer');
const teamArray = []; 

//manager prompts
const Manager = require('./lib/Manager');
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Manager of the team', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter manager's name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log (" ")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Enter a valid email')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Enter a valid number')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

//engineer and intern prompts
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const addEmployee = () => {
    console.log(`Adding employees`);
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Choose employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Name of the employee", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter employee's name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Enter the employee's ID")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Enter an email')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Enter the employee's github username")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter school attended by intern",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Enter school that the intern attended")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // data for employee types 

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};

//generate HTML using file stystem
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been created. Located in the dist folder (index.html)")
        }
    })
}; 
addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });