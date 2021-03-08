const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const team = [];


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
  message: "Which is this team member's role?",
  choices: ["Manager", "Engineer", "Intern"]
}
]

// Take the user inputs
async function getEmployeeDetails(questions) {
  answers= await inquirer.prompt(questions)

    
      var type = answers.choice;

      switch (type) {
          case "Manager":
          getManagerOffice(answers)
          break;
        
          case "Engineer":
          getEngineerGithub(answers)
          // goAgain()
          break;
        
          case "Intern":
          getInternSchool(answers)
          break;
      }
}

const getEngineerGithub = async (answers) =>{
  
  github= await inquirer.prompt([
    {
        type: "input",
        name: "GitHubName",
        message: "Enter the Engineer's GitHub Name?"
    }
  ])
  let engineer = new Engineer(answers.name, answers.id, answers.email, github.GitHubName);
  console.log(engineer);
team.push(engineer)
  goAgain()
}

const getManagerOffice = async (answers) =>{
  
  office = await inquirer.prompt([
    {
        type: "input",
        name: "ManagerOffice",
        message: "Enter the Manager's Office Number?"
    }
  ])
  let manager = new Manager(answers.name, answers.id, answers.email, office.ManagerOffice);
  team.push(manager)
  goAgain()
}

const getInternSchool = async (answers) =>{
  
  school = await inquirer.prompt([
    {
        type: "input",
        name: "InternSchool",
        message: "Enter the Intern's School?"
    }
  ])
  let intern = new Intern(answers.name, answers.id, answers.email, school.InternSchool);
  console.log(intern);
  team.push(intern)
  goAgain()
}

const goAgain = async () => 
    await inquirer.prompt([
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
    //"./output./team.html"
      fs.writeFileSync(outputPath,render(team) )
    }
});


getEmployeeDetails(EmployeeDetailQuestions);
