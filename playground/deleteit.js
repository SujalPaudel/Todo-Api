class User{
  constructor(name){
    var Name;
    this.Name = name;
  }
  sayHi(){
    return this.Name;
  }
};

var obj = new User("Raju");
// console.log(obj.sayHi());
console.log(obj.sayHi());


class Todo{
  constructor(rajesh){
    this.rajesh = rajesh;
  }
  sayHi(){
    console.log(this.rajesh);
  }
}

let ram = new Todo("Rajesh");
ram.sayHi();
