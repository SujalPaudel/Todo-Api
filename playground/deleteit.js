// class User{
//   constructor(name){
//     var Name;
//     this.Name = name;
//   }
//   sayHi(){
//     return this.Name;
//   }
// };

// var obj = new User("Raju");
// // console.log(obj.sayHi());
// console.log(obj.sayHi());


// class Todo{
//   constructor(rajesh){
//     this.rajesh = rajesh;
//   }
//   sayHi(){
//     console.log(this.rajesh);
//   }
// }

// let ram = new Todo("Rajesh");
// ram.sayHi();


var one = class{
  constructor(name){
    this.name = name;
  }
  sayHi(){
    console.log(`Hello ${this.name}`);
  }
};

let obj = new one("Determination");
obj.sayHi();

var user = {name : "Aaman Bhandari", age : 20};
var {name} = user;
console.log(name);

