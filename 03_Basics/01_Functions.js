// function addTwoNumbers (num1, num2){ //// here num1 & num2 are parameters
//     console.log(num1+ num2);
// }
// addTwoNumbers(3,4) /// here 3 & 4 are arguments

function addTwoNumbers (num1,num2){
    let sum = num1 + num2
    return sum
}

const sum = addTwoNumbers(3,5)
// console.log("Result: ", sum);



function loginUserMessage (username){
    if (!username){
        console.log("Please enter the user name");
        return
    }
    return `${username} just logged in.`
}

console.log(loginUserMessage("Nitesh"));





