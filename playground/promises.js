let promiseToCleanTheRoom = new Promise((resolve, reject) => {
  let roomCleaned = true;

  if(roomCleaned){
    resolve("Yes its clean");
  }
  else
    reject("No its not clean");
});

promiseToCleanTheRoom.then((done) => {
  console.log(done);
}, (notdone) => {
  console.log(notdone);
});

let cleanTheRoom = function(){
  return new Promise((resolve, reject) => resolve("Cleaned the room"));
};

let garbageOut = function(message){
  return new Promise((resolve, reject) => resolve(message + " Took the garbage out"));
};

let wonIceCream = function(message){
  return new Promise((resolve, reject) => resolve(message + " Won the icecream"));
};

cleanTheRoom().then((done) => garbageOut(done)).then((done) => wonIceCream(done)).then((done) => console.log(done), (err) => console.log("No success"));

Promise.all([cleanTheRoom(), garbageOut(), wonIceCream()]).then((done) => console.log(done));