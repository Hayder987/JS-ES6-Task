
console.clear();


// const student = {
//    name : "rakibul",
//    age : 28,
//    home : "pabna"
// };

// const student1 = {
//   name : "hayder",
//   city : "dhaka"
// };

// const {name, age=62, home} = student;

// console.log(name, age, home);



// let name = [1,5,6,8];

// let number = [...name];

// name.push(45)

// console.log(number)


// let friend = [2,8,45,12];

// let bondhu = [4,9,56,...friend,89,56,78,4,1,52,5]

// friend.push(563)

// console.log(bondhu)
// console.log(friend);

// const number = [5, 6, 7];

// const [a, b, c] = number;
// const [x,y,z] = [...number];

// console.log(b)


// function mul (a, b){
//   return [a*2, b*2]
// }

// let [x, y] = mul(2,3);
// console.log(x,y);


// const display = (a,b,c)=>{

//  let sum = a+b+c;
//  let mul = a*b*c;

//  let result = sum + mul;
//  return [sum, mul, result]

// };

// const [sum, mul, result] = display(2,3,4);

// console.log(sum, mul, result);


// const data = (a,b,c)=> a*b*c;
  
// console.log(data(2,3,4))


// const data = `
// i am a web developer
// i love to code
// i love to eat biriayani
// `
// console.log(data)

// const add = (a, b=5)=> a+b;

// console.log(add(4));



// const display = (arr)=>{
// let newArr = [];
//   for(let item of arr){
//    if(item.length%2 !==0){
//       newArr.push(item)
//    }
//   }

//   return newArr
// };

// const name = ["hayder", "orin", "jony", "mim", "rakibul"];
// let result = display(name);

// console.log(result)

// step-1
// const display =(arr)=>{
//    let newArr = [];
//   for(let item of arr){
//     newArr.push(Math.pow(item, 2));
 
//   };
//   let sum = 0;

//   for(let num of newArr){
//     sum += num;
//   }
//   let average = sum / arr.length;
//   return average

// };
// let number = [2,3,4,5];
// console.log(display(number));


// step-2
// const display =(arr)=>{
//    let sum =0;
//    for(let item of arr){
//     sum += item*item;
//    };
//    const average = sum / arr.length;
//    return average;
// };
// let number = [2,3,4,5];
// console.log(display(number));


// const maxNumber =(arr)=> Math.max(...arr);

// let number1 = [1,2,15,3];
// let number2 = [2,1,3,7];
// const number = [...number1, ...number2];

// console.log(maxNumber(number));


// const person = {
//    firstName: "Alice",
//    lastName: "Johnson",
//    age: 28
//  };

// // for(let item in person){
// //  let result = `${item} : ${person[item]}`
// //  console.log(result);
// // }


// const {firstName:fName, lastName:lName, age} = person;

// let result = `first-name : ${fName}
// last-name : ${lName} 
// Age : ${age}`;

// console.log(result);


// function Student (name, age){
//   this.name = name;
//   this.age = age;

//   this.display = function (){
//    return `${this.name} , ${this.age}`
//   }
// }

// let student1 = new Student ("rakibul", 28);

// console.log(student1.display());


// class Car {
//    constructor(make, year) {
//      this.make = make;
//      this.year = year;
//    }
 
//    getDetails() {
//      return `Make: ${this.make}, Year: ${this.year}`;
//    }
//  }
 
//  const myCar = new Car("Toyota", 2020);
//  console.log(myCar.getDetails());










