const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { Console } = require("console");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// const teamMembers = []

let EmployeeDetailQuestions =[
{
  type: 'input',
  name: 'name',
  message: 'Enter employee name.',
},
{
  type: 'input',
  name: 'id',
  message: 'Enter the employee ID number.',
},
{
  type: 'input',
  message: 'Enter the employee email.',
  name: 'email',
},
{
  type: "list",
  name: "choice",
  message: "Which type of team member will you add?",
  choices: ["Manager", "Engineer", "Intern"]
}
]

// Take the user inputs
function getEmployeeDetails(questions) {
  inquirer.prompt(questions)

    .then((answers) => {
      var type = answers.choice;

      switch (type) {
          case "Manager":
          console.log(`\n Name: ${answers.name} \n ID: ${answers.id} \n Email: ${answers.email} \n Role:  ${answers.choice} \n Office:`);
          break;
        
          case "Engineer":
          // getEngineerGithub()
          // console.log(`\n Name: ${answers.name} \n ID: ${answers.id} \n Email: ${answers.email} \n Role:  ${answers.choice} \n GitHub Name: ${answers.GitHubName}`);
          break;
        
          case "Intern":
          console.log(`\n Name: ${answers.name} \n ID: ${answers.id} \n Email: ${answers.email} \n Role:  ${answers.choice} \n School:`);
          break;
      }
      goAgain();
      
    }
    );
}

const getEngineerGithub = () =>
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

const goAgain = () => 
    inquirer.prompt([
    {
        type: "list",
        name: "replay",
        message: "Do you want to add another employee?",
        choices: ["Yes", "No"]
    }
])
.then(answers => {
    var replay = answers.replay;

    if (replay === "Yes"){
    
    console.clear()
    getEmployeeDetails(EmployeeDetailQuestions);
    } else {
    console.log("Process Ended");
    }
});



getEmployeeDetails(EmployeeDetailQuestions);




// const createTeam = async () => (){
//     {
//       let intern = new intern (data.name, data.id, data.email, data.school);
//       let engineer = new engineer (data.name, data.id, data.email, data.github);
//       teamMembers.push(employee);
//       console.log(teamMembers)
//     }
// }


// // somehow write this somewhere
// fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
// err ? console.log(err) : console.log('Success!')
// );

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! 
