// function numberChecking() {
//     var number1 = 101;
//     var number2 = 15;

//     if (number1 > 100) {
//         console.log("Number 1 has many digits!")
//     }

//     if (number1 < 0) {
//         console.log("Number 1 is a negative number")
//     }

//     if (number2 < 20) {
//         console.log("Number 2 is not a very high number")

//     }

//     if (number2 > 50) {
//         console.log("Number 2 is a high number")
//     }

// }
// numberChecking()


// let greeting = "Hello World";


// // //string
// let name = 'Brittany';

// //number
// let age = 33;

// //boolean
// let married = false;


// //array
// let dogs = ['Pepper', 'Spot', 'Tank', 'Winston'];


// //object
// let house = {
//     numberOfBedrooms: 4,
//     numberOfBathrooms: 2.5,
//     hasPool: false,
//     location: 'San Francisco',
//     price: '1.3 million'

// };
// console.log(name);
// console.log(age);
// console.log(married);
// console.log(dogs);

// console.log(house);
// // console.log();
// // console.log();


// const newString = "My Car";
// console.log(newString);



// let person = {
//     firstName: 'John',
//     lastName: 'Smith',
//     fullName: function() {
//         return person.firstName + ' ' + person.lastName;
//     }
// };
// person.fullName();



// let person = {
//     firstName: 'John',
//     lastName: 'Smith',
//     getFullName: function() {
//         return this.firstName + this.lastName

//     }
// };
// person.getFullName();

// let carMiles = {
//     odometer: 5000,
//     traveled: 250,
//     getUpdatedOdometer: function() {
//         return this.odometer + this.traveled;
//     }
// };

// carMiles.getUpdatedOdometer();


// let user = {
//     firstName: "Coder",
//     lastName: "Bill",
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// }
// console.log(user);

// method named newPayments 

// let product = {
//     cost: 1200,
//     deliveryFee: 200,

//     newPayments: function() {

//         return (this.cost + this.deliveryFee) * 100;
//     }

// }
// console.log(product);



// let odd = 7;
// let even = 20;
// let greaterThan;
// if (odd > 19 && even > 19) {
//     greaterThan = true;

// } else {
//     greaterThan = false;
// }
// // console.log(greaterThan);


// let odd = 7;
// let even = 20;
// let greaterThan;
// if(odd > 19 || even > 19){
//     greaterThan = true;
// }
// else {
//     greaterThan = false;
// }


// let odd = "20";
// let even = 20;
// let equalTo;
// if (odd === even) {
//     equalTo = true;
// } else {
//     equalTo = false;
// }
// console.log(equalTo)




// let firstSet = ["q", "w", "e", "r", "t", "y"];
// let secondSet = ["1", "3", "3", "7"];
// let cluster = [...firstSet, ...secondSet];
// console.log(cluster)

let goodGrades = ["A", "B"];
let notSoGoodGrades = ["C", "D", "F"];
let grades = [...goodGrades, ...notSoGoodGrades]
console.log(grades)