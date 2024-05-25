// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'title',
        message: 'What is project title: ',
    },
    {
        type:'input',
        name: 'description',
        message: 'Describe the project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions: ',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Paste link to website (if applicable): ',
    },
    {
        type: 'input',
        name: 'repOlink',
        message: 'Paste link to repository: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage information: ',
    },
    {
        type: 'input',
        name: 'images',
        message: 'Link to an example image (include file name and extension): ',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Contribution quidelines: ',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test instructions: ',
    },
    {
        type:'list',
        name: 'license',
        message: 'Choose License: ',
        choices: ['Apache 2.0','Boost 1.0','BSD 3-Clause','MIT','MPL 2.0','ISC','IBM','GNU GPL v3','skip'],
    },
    {
        type:'input',
        name:'gitHubUser',
        message: 'Enter Github user name: ',
    },
    {
        type:'input',
        name:'email',
        message:'Enter your email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`,data,(err)=>{
        if(err){
            console.error('error in file generation!!!',err);
        }else{
            console.log('README.md generated!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
.then(data =>{
    console.log(`the file name was ${data.title}`);
    writeToFile('README',generateMarkdown(data));
})

}

// Function call to initialize app
init();

