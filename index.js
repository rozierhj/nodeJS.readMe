// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name: 'title',
        message: 'what is file name: ',
    },
    {
        type:'input',
        name: 'description',
        message: 'Describe the project: ',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions: ',
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
        message: 'Describe how application is used',
    },
    {
        type: 'input',
        name: 'images',
        message: 'Provide a link to an example image (include file name and extension)',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Contributors: ',
    },
    {
        type:'list',
        name: 'license',
        message: 'what is file license',
        choices: ['Apache 2.0','Boost 1.0','BSD 3-Clause','MIT','MPL 2.0','ISC','IBM','GNU GPL v3','skip'],
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

