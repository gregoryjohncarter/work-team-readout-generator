const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML.js');
const fs = require('fs');
const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

// array of questions initially
const initQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your manager\'s name',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter your manager\'s ID',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter an ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your manager\'s email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter your manager\'s office number',
        validate: numberInput => {
            if (numberInput) {
                return true;
            } else {
                console.log('Please enter an office number!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'employeePrompt',
        message: 'Would you like to add an engineer or an intern?',
        choices: ['Engineer', 'Intern'],
        default: 0
    }
];

// engineer questions
const questionsPt2 = [
    {
        type: 'input',
        name: 'engName',
        message: 'Enter your engineer\'s name',
        validate: engNameInput => {
            if (engNameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engId',
        message: 'Enter your engineer\'s ID',
        validate: engIdInput => {
            if (engIdInput) {
                return true;
            } else {
                console.log('Please enter an ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engEmail',
        message: 'Enter your engineer\'s email',
        validate: engEmailInput => {
            if (engEmailInput) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engGitHub',
        message: 'Enter your engineer\'s GitHub',
        validate: engGitHubInput => {
            if (engGitHubInput) {
                return true;
            } else {
                console.log('Please enter a GitHub username');
                return false;
            }
        }
    },
    {
    type: 'confirm',
    name: 'confirmAddEmployee',
    message: 'Would you like to enter another employee?',
    default: false
    },
    {
        type: 'list',
        name: 'employeePrompt2',
        message: 'Would you like to add an engineer or an intern?',
        when: ({ confirmAddEmployee }) => confirmAddEmployee,
        choices: ['Engineer', 'Intern'],
        default: 0
      }
];

// intern questions
const questionsPt3 = [
    {
        type: 'input',
        name: 'intName',
        message: 'Enter your intern\'s name',
        validate: intNameInput => {
            if (intNameInput) {
                return true;
            } else {
                console.log('Please enter a name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'intId',
        message: 'Enter your intern\'s ID',
        validate: intIdInput => {
            if (intIdInput) {
                return true;
            } else {
                console.log('Please enter an ID!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'intEmail',
        message: 'Enter your intern\'s email',
        validate: intEmailInput => {
            if (intEmailInput) {
                return true;
            } else {
                console.log('Please enter an email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'intSchool',
        message: 'Enter your intern\'s school',
        validate: intSchoolInput => {
            if (intSchoolInput) {
                return true;
            } else {
                console.log('Please enter a school');
                return false;
            }
        }
    },
    {
    type: 'confirm',
    name: 'confirmAddEmployee',
    message: 'Would you like to enter another employee?',
    default: false
    },
    {
        type: 'list',
        name: 'employeePrompt2',
        message: 'Would you like to add an engineer or an intern?',
        when: ({ confirmAddEmployee }) => confirmAddEmployee,
        choices: ['Engineer', 'Intern'],
        default: 0
      }
];

const promptUser1 = (questions) => {
    console.log(`
    =================
    Generate a team profile
    =================
    `);
    return inquirer.prompt(questions);
}

// if adding more than 2 employees, see the return promptUser3 where the objective is to
// separate userData for array of employees and userData 2 for successive prompts questions data
const promptUser2 = userData => {
    if (!userData.employees) {
        userData.employees = [];
        var manager = new Manager(userData.name, userData.id, userData.email, userData.officeNumber);
        userData.employees.push(manager);
    }
    if (userData.employeePrompt === "Engineer") {
        return inquirer.prompt(questionsPt2)
        .then(userData2 => {
            var engineer = new Engineer(userData2.engName, userData2.engId, userData2.engEmail, userData2.engGitHub);
            userData.employees.push(engineer);
                if (userData2.confirmAddEmployee === true) {
                   return promptUser3(userData, userData2);
                } else {
                    return userData;
                }
        });
    } else {
        return inquirer.prompt(questionsPt3)
        .then(userData2 => {
            var intern = new Intern(userData2.intName, userData2.intId, userData2.intEmail, userData2.intSchool);
            userData.employees.push(intern);
                if (userData2.confirmAddEmployee === true) {
                    return promptUser3(userData, userData2);
                } else {
                    return userData;
                }
        });
    }
};  

// see userData / userData 2 above
const promptUser3 = (userData, userData2) => {
    if (userData2.employeePrompt2 === "Engineer") {
        return inquirer.prompt(questionsPt2)
        .then(userData2 => {
            var engineer = new Engineer(userData2.engName, userData2.engId, userData2.engEmail, userData2.engGitHub);
            userData.employees.push(engineer);
                if (userData2.confirmAddEmployee === true) {
                   return promptUser3(userData, userData2);
                } else {
                    return userData;
                }
        });
    } else {
        return inquirer.prompt(questionsPt3)
        .then(userData2 => {
            var intern = new Intern(userData2.intName, userData2.intId, userData2.intEmail, userData2.intSchool);
            userData.employees.push(intern);
                if (userData2.confirmAddEmployee === true) {
                    return promptUser3(userData, userData2);
                } else {
                    return userData;
                }
        });
    }
}
  
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
                // if everything went well, resolve the Promise and send the successful data to the `.then()` method
                resolve({
                ok: true,
                message: 'File created!'
                });
            });
    });
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
}
  
function init() {
    promptUser1(initQuestions)
        .then(promptUser2)
        .then(promptData => {
            return generateHTML(promptData);
        })
        .then(pageHTML => {
            return writeFile(pageHTML);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyFile();
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse);
        })
        .catch(err => {
            console.log(err);
        });
}
  
// Function call to initialize app
init()