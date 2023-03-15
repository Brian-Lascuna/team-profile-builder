const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const generateCard = require('./src/generateCard');
const generateHtml = require('./src/generateHtml');

var employeeCards = '';

const managerInfo = [
    {
        type: 'input',
        message: 'Enter manager name: ',
        name: 'managerName'
    },
    {
        type: 'input',
        message: 'Enter manager email: ',
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: 'Enter employee ID: ',
        name: 'managerID'
    },
    {
        type: 'input',
        message: 'Enter office number: ',
        name: 'managerOfficeNum'
    },
    {
        type: 'list',
        message: 'Who would you like to add to your team?',
        choices: ['Engineer', 'Intern'],
        name: 'newEmployee'
    }

]

const engineerInfo = [
    {
        type: 'input',
        message: 'Enter engineer name: ',
        name: 'engineerName'
    },
    {
        type: 'input',
        message: "Enter engineer's email: ",
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: 'Enter employee ID: ',
        name: 'engineerID'
    },
    {
        type: 'input',
        message: "Enter engineer's github username: ",
        name: 'engineerGithub'
    },
    {
        type: 'list',
        message: 'Add another employee?',
        choices: ['Engineer', 'Intern', 'Finish'],
        name: 'newEmployee'
    }
]

const internInfo = [
    {
        type: 'input',
        message: 'Enter intern name: ',
        name: 'internName'
    },
    {
        type: 'input',
        message: 'Enter intern email: ',
        name: 'internEmail'
    },
    {
        type: 'input',
        message: 'Enter employee ID: ',
        name: 'internID'
    },
    {
        type: 'input',
        message: "Enter intern's school: ",
        name: 'internSchool'
    },
    {
        type: 'list',
        message: 'Add another employee?',
        choices: ['Engineer', 'Intern', 'Finish'],
        name: 'newEmployee'
    }
]

function initializeTeam() {
    inquirer
        .prompt(managerInfo)
        .then( data => {
            let newManager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeNum);
            let managerCard = generateCard(newManager.getRole(), newManager);
            employeeCards += managerCard;
            addEmployee(data.newEmployee);
        })
    }

function addEmployee(role) {
    if (role == 'Engineer') {
        inquirer
            .prompt(engineerInfo)
            .then( data => {
                let newEngineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub)
                let engineerCard = generateCard(newEngineer.getRole(), newEngineer);
                employeeCards += engineerCard;
                if (data.newEmployee != 'Finish') {
                    addEmployee(data.newEmployee);
                }
                else {
                    generateHtml(employeeCards);
                }
            })
    }
    else if (role == 'Intern') {
        inquirer
            .prompt(internInfo)
            .then( data => {
                let newIntern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool)
                let internCard = generateCard(newIntern.getRole(), newIntern);
                employeeCards += internCard;
                if (data.newEmployee != 'Finish') {
                    addEmployee(data.newEmployee);
                }
                else {
                    generateHtml(employeeCards);
                }
            })
    }
}

initializeTeam();