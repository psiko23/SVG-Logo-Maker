const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes')


function getUserInput() {
    inquirer.prompt([
        {
            name: 'logoText',
            message: 'What text should be included? (up to three characters)',
            type: 'input'
        },
        {
            name: 'textColor',
            message:'What color should the text be? (enter a color keyword or hexadecimal number)',
            type: 'input'
        },
        {
            name: 'shape',
            message: 'What shape do you want your logo to be?',
            type: 'list',
            choices: ['triangle','circle','square']
        },
        {
            name: 'shapeColor',
            message: 'What color should the shape be? (enter a color keyword or hexadecimal number)',
            type: 'input'
        }
    ])
    .then(answers => {
        console.log('Answers:  ' ,answers);
        generateSVG('output.svg', answers)
    })
}

getUserInput();

function generateSVG(fileName, answers) {

    let svgString = '';

    let shapeChoice;

    if (answers.shape === 'triangle') {

        shapeChoice = new Triangle();

    } else if (answers.shape === 'circle') {

        shapeChoice = new Circle();

    } else {

        shapeChoice = new Square();

    }

    const userText = answers.logoText;
    const textColor = answers.textColor 
    shapeChoice.setColor(answers.shapeColor);

    svgString += shapeChoice.render(answers.logoText, answers.textColor)
    svgString += `<text x="50%" y="50%" font-size="40" text-anchor="middle" dy=".3em" fill="${textColor}">${userText}</text></g></svg>`
    console.log(svgString);

    fs.writeFile('output.svg', svgString, (err) => {
        if (err) {
            console.error('Error writing SVG file: ', err);
        } else {
            console.log('SVG file generated! ', 'output.svg')
        }
    })
}