#! /usr/bin/env node
//shabang

import inquirer from "inquirer";
let answers = await inquirer.prompt([
  { message: "Enter first Number:",type:"number",name:"firstNumber"},
  {message: "Enter first Number:",type:"number",name:"secondNumber"},
  {message:"Select an operator to perform your operation",type:"list",
name:"Operators",
choices:["Addition","Subtraction","Divsion","Multiplication"],
},

]);

// condition
if (answers.Operators === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber);
}
else if(answers.Operators === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber);
}
else if(answers.Operators === "Divsion"){
    console.log(answers.firstNumber / answers.secondNumber);
}
else if(answers.Operators === "Multiplication"){
    console.log(answers.firstNumber *  answers.secondNumber);
}
else{
    console.log("Please select valid Operator");
}