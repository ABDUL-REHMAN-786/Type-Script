import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer"
import chalk from "chalk";

const res = await inquirer.prompt({
    type:"number",
    name:"userInput",
    message: (chalk.bold.italic.yellowBright("Please enter the amount of second:")),
    validate: (input)=>{
        if(isNaN(input)){
            return "please enter valid number"
        }else if (input > 60){
            return "seconds must be in 60"
        }else{
            return true;
        }
    }
});

let input = res.userInput

function startTime(val:number){

    
const intTime = new Date().setSeconds(new Date().getSeconds()+ val);
const intervalTime = new Date(intTime);

    setInterval((()=>{
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime,currentTime);

        if(timeDiff <=0){
            console.log("time has expired");
            process.exit();
        }
        const minute = Math.floor((timeDiff%(3600*24))/3600)

        const second = Math.floor(timeDiff % 60);

        console.log(`${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`)
    }),1000);
}

startTime(input);