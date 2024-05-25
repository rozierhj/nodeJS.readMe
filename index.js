// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`,data,(err)=>{
        if(err){
            console.error('we had an error',err);
        }else{
            console.log('we do it!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
        type:'input',
        name: 'title',
        message: 'what is file name',
    },
    {
        type:'list',
        name: 'license',
        message: 'what is file license',
        choices: ['Apache 2.0','Boost 1.0','BSD 3-Clause','MIT','MPL 2.0','ISC','IBM','GNU GPL v3','skip'],
    }
])
.then(data =>{
    console.log(`the file name was ${data.title}`);
    writeToFile(data.title,generateMarkdown(data));
})

}

// Function call to initialize app
init();
//writeToFile('chicken',generateMarkdown(testObject));
