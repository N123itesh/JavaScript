
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,300,400,2000));

const user = {
    username : "Nitesh",
    price : 199
}
function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);   
}

// handleObject(user)
handleObject({
    username: "Kumar",
    price : 299
})


const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600]));






