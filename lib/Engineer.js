const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email, gitHub);
    
        this.gitHub = gitHub;
        this.role = 'Engineer';
      }
    
    getGitHub() {
        return `GitHub: <a href='https://github.com/${this.gitHub}' target='_blank'>${this.gitHub}</a>`;
    }

    getRole() {
        return `${this.role}`;
    }
}

module.exports = Engineer;