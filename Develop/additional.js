const inquirer = require("inquirer");
const fs = require("fs");

const getEngineerGithub =  () =>
    inquirer.prompt([
  {
      type: "input",
      name: "GitHubName",
      message: "Enter the Engineer's GitHub Name?"
  }
])
.then(answers => {
    
  console.log(answers.GitHubName);

});

getEngineerGithub()