const inquirer = require("inquirer");
const fs = require("fs");

let myName = "";
let fromWhere = "";
let gitUser = "";
let linkedInURL = "";

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "input",
    },
    {
      type: "input",
      message: "Where are you from?",
      name: "input",
    },
    {
      type: "input",
      message: "What is your git username?",
      name: "input",
    },
    {
      type: "input",
      message: "What is your LinkedIn URL?",
      name: "input",
    },
  ])
  .then(
    (response) =>
      // response.confirm === response.password
      //   ? console.log("Success!")
      //   : console.log("You forgot your password already?!")
      // console.log(generateHTML)
      generateHTML
  );

function generateHTML(test) {
  `<!DOCTYPE html>
    <html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">Hi! My name is ${myName}</h1>
            <p class="lead">I am from ${fromWhere}.</p>
            <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
            <ul class="list-group">
<li class="list-group-item">My GitHub username is ${gitUser}</li>
                <li class="list-group-item">LinkedIn: ${linkedInURL}</li>
            </ul>
        </div>
    </div>
</body>

</html>`;
}
