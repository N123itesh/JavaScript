// const tinderUser = new Object() //Singleton object

const tinderUser = {} // non Singleton object;


tinderUser.id = "123abc"
tinderUser.name = "Samay"
tinderUser.isLoggedIn =false

// console.log(tinderUser);

const regularUser = {
    email : "Nitesh@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Nitesh",
            lastName : "Kumar"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}

const obj4 = {...obj1 , ...obj2, ...obj3}
// console.log(obj4);


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));


/************************************************************************************************************************************************************************************************* */
////////// OBJECT DESTRUCTURING //////////
/***********************************************************************************************************************************************************************************************************/

const course = {
    courseName : "JavaScript",
    price : "999",
    courseInstructor : "Nitesh"
}

// course.courseInstructor

const {courseInstructor : instructor } = course

// console.log(instructor);

/************************************************************************************************************************************************************************************************* */
////////// JSON API //////////
/***********************************************************************************************************************************************************************************************************/

// {
//     "Name": "Nitesh",
//     "coursename" : "JavaScript",
//     "price" : "Free"
// }