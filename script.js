
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
//    constructor(brand, year){
//       this.name = brand;
//       this.year = year;
//    }

//    display(){
//       return `Brand : ${this.name} , Year : ${this.year}`;
//    }
// };

// const car1 = new Car ("toyota", 2020);

// console.log(car1.display());


// let arr = [3,6,8,9];

// let [num, ...rest] = arr;

// console.log(num, rest);


// const student = {
//    name : "Rakibul",
//    age : 28,
//    cgpa : 3.65
// }
// let {name, ...rest} = student;

// console.log(name, rest);


// let numbers = [2,3,4,5,6];

// let output = numbers.map(n => n*2);

// console.log(output)


// let name = ["rakibul", "orin", "jony"];

// let ul = document.getElementById("ul");

// name.forEach((item)=>{
//  let li = document.createElement("li");
//     li.innerText = item;

//     ul.appendChild(li)
// });

// let number = [5,2,4,6,9,7,12];

// console.log(number.reduce((x, y)=> x+y, 0));


// task -1: console log the secondary school location of Sophia 

// let data = {
//     Sophia: {
//         id: 33,
//         study: [
//             {
//                 primary:
//                     [
//                         { school_name: "ABC primary school" },
//                         { location: "Peters burg" }
//                     ]
//             },
//             {
//                 secondary:
//                     [
//                         { school_name: "ABC secondary school" },
//                         { location: "St Lorence" }
//                     ]
//             },
//         ]
//     }
// }
//  console.log(data.Sophia.study[1].secondary[1].location);


// task-2: console .log  output: Petersburg, Herry
// let students = {
//     2222: {
//         name: "Jack",
//         section: "C",
//         class: "IX",
//         address: {
//             "building no": 12,
//             "street": "St. Jonson",
//             "city": "Petersburg",
//             "country": "UK"
//         }
//     },
//     3333: {
//         name: "Herry",
//         section: "D",
//         class: "X",
//         address: {
//             "building no": 85,
//             "street": "DC road",
//             "city": "Kachukhet",
//             "country": "Bangladesh"
//         }
//     }
// }
// console.log(students["2222"]["address"]["city"])
// console.log(students["3333"].name);


// task-3 : access and then show habluder adda
// show output Beginner
// let data2 = {
//     data:
//         [
//             {
//                 bookId: 1,
//                 bookDetails: {
//                     name: "habluder adda",
//                     category: "XYZ",
//                     price: "20$",
//                 },
//                 bookCategory: "Basic",
//             },
//             {
//                 bookId: 2,
//                 bookDetails: {
//                     name: "gobluder adda",
//                     category: "ABC",
//                     price: "40$",
//                 },
//                 bookCategory: "Beginner",
//             }
//         ]
// }
// console.log(data2.data[0].bookDetails.name);


// const numbers = [1,3,5,7,9];

// let arr = []
// for(let item of numbers){
//   arr.push(item+1)
// }
// console.log(arr)

// console.log(numbers.map(num=> num+1));

// let number = [30,33,50,79,78,90,101,30]

// console.log(number.filter(x=> x%10===0));


// let person = [
//     {name : "nodi", age : 29, position : "senior"},
//     {name : "akil", age : 25, position : "junior"},
//     {name : "jony", age : 28, position : "senior"}
// ]

// console.log(person.filter(x=> x.position==="senior"))
// console.log(person.filter(x=> x.age>25))

// let person = [
//     {name : "nodi", age : 29, position : "senior"},
//     {name : "akil", age : 25, position : "junior"},
//     {name : "jony", age : 28, position : "senior"}
// ]

// console.log(person.reduce((a, x)=> a+ x.age, 0))
// let sum = 0;
// for(let item of person){
//    sum +=item.age
// }

// console.log(sum);

// class Student {
//     constructor(name, age){
//      this.name  = name;
//      this.age = age;
//     }
//     display(){
//       console.log(this.name);
//       console.log(this.age);
//       console.log(this.subject) 
//     }
//     display2(){
//         console.log(`Your Name : ${this.name} your Age: ${this.age} subject : ${this.subject}`)
//     }
// }
// class Art extends Student{
//     constructor(name, age, subject){
//         super(name, age)
//         this.subject = subject;
//     }
// }

// let student1 = new Student ("hayder", 28);
// let artStudent = new Art ("orin", 25, "history")
// // console.log(student1.display2());
// console.log(artStudent.display2())


// let student = {
//     name : "rakib",
//     age : 28,
//     address : {
//      home : "Pabna",
//      work : {
//         remote : "delhi",
//         office : "dhaka"
//      } 
//     }
// };

// console.log(student?.address?.work?.remote)


// let arr = [1, 2, 3, 4];

// console.table(arr.map(x=> x*x))

// const number = [1, 2, 3, 4];

// number.forEach(x => console.log(`Value : ${x}`))


// function display(){
//     let count = 0;

//     return function(){
//         count ++;
//         return count;
//     }
// };
// let data = display();
// let data1 = display();
// //  console.log(data());
// //  console.log(data());
// //  console.log(data());

//  for(let x=0; x<10; x++){
//     console.log(data1())
//  }


// function display(data){
//    console.log(data())
// }


// function data(){
//  let sum = 2+5;
//  return sum;
// };

// display(data);


// function getData (calculate, item, item2){
//   console.log(calculate(item, item2))
// }

// function sum(num1, num2){
//   let sum = num1 + num2;

//   return sum
// }
// function mult (num1, num2){
// let mul = num1 * num2;
// return mul;
// } 

//  getData(sum, 5,7);
//  getData(mult, 2,3)

// function display(data,item){
//   console.log("hello");
//   data (item);
// };

// function data(item){
//     console.log("welcome", item);


// }

// display(data, "world");


// function display(func1, item){
//    return doubble(item)
// }

// function doubble (item){
//   return item*2;
// }

// let result = display(doubble, 5);

// console.log(result)

// function display (sum, num1, num2){
//   return sum(num1, num2)
// }

// function sum (a, b){
//   return a+b;
// }
 
// let result = display(sum , 5, 6);

// console.log(result);


// function cheackAge(age, data){
//   return age(data);
// }

// function age (num){
//     if(num>=18){
//         return "Person Adult"
//     }
//     else{
//         return "person Not Adult"
//     }

// }

// let result = cheackAge(age, 65);

// console.log(result);


// function data (){
//     let count =  1;
    
//  document.getElementById("btn").addEventListener("click", function(){
//      count ++
//      document.getElementById("p").innerText = count;
//      console.log(count);
//  });
 
// //  return count; 
// };

// let count1 = data();


// // console.log(count1);




// function display(a, b, c ,d){
//    let arr = [...arguments];
//     let sum = 0
//    arr.forEach(x => sum += x)
   
//   console.log(sum)
// }
 
// display(2,4,6,7,8,3,5);


// let number = [2,5,6,78,12,5]

// let [a, b, c, d, ...rest ] = number;

// // console.log(a,b,c,d , rest)

// let arr = [5, a, ...rest];

// console.log(arr);



// let student = {
//     name : "rakibul",
//     age : 28,
//     cgpa : 3.65
// }

// let {name, age:boyos, ...rest} = student;

// console.log(name, boyos, rest);



// class Car {
//     constructor(name, year){
//      this.name = name;
//      this.year = year;
//     }
//     display(){
//         return `Brand: ${this.name} Production: ${this.year} ${this.model ? `Model: ${this.model}` : ''}`;
//     }
// };

// class SportCar extends Car {
//     constructor(name, year, model){
//         super(name, year)
//         this.model = model;
//     }
// }

// let car1 = new Car ("toyota", 2012);
// let sportCar1 = new SportCar("ferari", 2022, "FDW-36")

// console.log(car1.display());

// console.log(sportCar1.display());



// let arr = [1, 2, 3, 4];

// console.log(arr.map(x=> Math.pow(x, 2)));


// let arr = [1, 3, 4, 6, 7, 8];

// const newArr = arr.filter(x=> x%2===0);

// // let newArr = [];
// // arr.map(x=> {
// //    if(x%2===0){
// //     newArr.push(x)
// //    } 
// // });

// console.log(newArr);


// const number = [2, 3, 4];

// let sum  = number.reduce((a,b)=> a*b, 1);

// console.log(sum);


// const number = [1, 2, 3, 4];
// let add = 0
//  number.forEach(x=> add +=x);

// console.log(add);


// let name  = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}];

// let newArr = (name.map(x=> x.name));

// console.log(newArr);

// const name = ['apple', 'dog', 'banana', 'cat'];

// const data = (arr)=>{
//   let output = arr.filter(x=> x.length>4);

//   return output
// };

// let result = data(name);

// console.log(result)



// let person = [
//     {name: 'Tom', age: 15}, 
//     {name: 'Jerry', age: 22}, 
//     {name: 'Spike', age: 19}
// ];

// let sum = person.reduce((a, b)=> {
//     if(b.age>18){
//         return a + b.age;
//     }
//     else{
//         return a;
//     }
// },0);

// console.log(sum);


// let arr = [{name: 'Alice'}, {name: 'Bob'}];
//  let result = [];
//  arr.forEach(x=> {
//     console.log(x)
//     x.age = 30;
//     console.log(x)
//     result.push(x)
// })
// console.log(result);

// const arr = [{name: 'Alice'}, {name: 'Bob'}];
// let newArr = []
// let a = arr.map(x=> {x.age=30; newArr.push(x)} );

// console.log(newArr);

// Task 10: Reduce - Flatten an array of arrays
// Description:
// You have an array of arrays. Use reduce() to flatten it into a single array.

// Input: [[1, 2], [3, 4], [5, 6]]
// Output: [1, 2, 3, 4, 5, 6];

// let arr =[[1, 2], [3, 4], [5, 6]];

// // console.log(arr.reduce((a,b)=> a.concat(b)));
// let newArr = [];
// arr.map(x=> newArr.push(...x));

// console.log(newArr);














