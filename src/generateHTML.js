const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const mainContentMgr = projectsArr => {
    return `<div class="card" style="width: 18rem;">
        <div class="card-header bg-secondary">
        ${projectsArr.name}<br>
        <i class="cup"></i>${projectsArr.getRole()}
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${projectsArr.id}</li>
            <li class="list-group-item">${projectsArr.getEmail()}</li>
            <li class="list-group-item">${projectsArr.getOfficeNumber()}</li>
        </ul>
        </div>
    </div>`
  }

const mainContentEng = projectsArr => {
    return `<div class="card" style="width: 18rem;">
        <div class="card-header bg-secondary">
        ${projectsArr.name}<br>
        <i class="eyeglasses"></i>${projectsArr.getRole()}
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${projectsArr.id}</li>
            <li class="list-group-item">${projectsArr.getEmail()}</li>
            <li class="list-group-item">${projectsArr.getGitHub()}</li>
        </ul>
        </div>
    </div>`
  }

const mainContentInt = projectsArr => {
    return `<div class="card" style="width: 18rem;">
        <div class="card-header bg-secondary">
        ${projectsArr.name}<br>
        <i class="mortarboard"></i>${projectsArr.getRole()}
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${projectsArr.id}</li>
            <li class="list-group-item">${projectsArr.getEmail()}</li>
            <li class="list-group-item">${projectsArr.getSchool()}</li>
        </ul>
        </div>
    </div>`
  }

const mainContent = projectsArr => {
    let html = '';
    for (let i = 0; i < projectsArr.length; i++) {
        if (projectsArr[i].role === "Manager") {
            html += mainContentMgr(projectsArr[i]);
        } else if (projectsArr[i].role === "Engineer") {
            html += mainContentEng(projectsArr[i]);
        } else if (projectsArr[i].role === "Intern") {
            html += mainContentInt(projectsArr[i]);
        }
    }
    return html;
}

module.exports = data => { 
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet"> 
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
        <link rel="stylesheet" href="style.css">
        <title>Team Readout</title>
    </head>
    <body>
    <nav class="navbar navbar-light bg-danger">
    <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">My Team</span>
    </div>
    </nav>
    <div class='container'>
    ${mainContent(data.employees)}
    </div>
        
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/js/bootstrap.min.js"></script>
    </body>
    </html>`;
}