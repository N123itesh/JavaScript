let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())

let myCreatedDate = new Date(2025, 0, 26)
console.log(myCreatedDate.toDateString());

let myCreatedDateTime = new Date(2025, 0, 26, 5, 3)
console.log(myCreatedDateTime.toLocaleString());

let newDay = new Date()
console.log(newDay.toLocaleString('Default', {
    weekday: "long",
}));




