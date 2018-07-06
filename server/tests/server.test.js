const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
  _id : new ObjectID(),
  text : "This is the dawn of the era"
  }, 
{
  _id : new ObjectID(),
  text : "This will remain forever"
 }];


beforeEach((done) => { 
    Todo.remove({}).then(() => {
   return Todo.insertMany(todos);
  }).then(() => done())
});

describe('POST /todos', () => {
  it('Should create a new todo', (done) => {
    var text = "In the verge of amazing node functionality";

    request(app)
      .post('/todos')
      .send({text})
      .expect(200) //the assertion phase starts
      .expect((res) => {
        expect(res.body.text).toBe(text)
      })
      .end((err, res) => {
        if (err){
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });

  });

  it('Should not create new todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if(err){
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});


describe('GET /todos', () => {
  it('Should get all the todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});


describe('GET /todos/:id', () => {
  it('Should return todo doc', (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(todos[0].text);
      })
      .end(done);
  });

let dummy_id = new ObjectID();

  it('should return 404 if todo not found', (done) => {
    request(app)
      .get(`/todos/${dummy_id.toHexString()}`)
      .expect(400)
      .end(done);
  });

  it('Should return 404 if invalid id is sent', (done) => {
    request(app)
      .get('/todos/123')
      .expect(404)
      .end(done);
  });
});

describe('DELETE /todos/:id', () => {
  var hexId = todos[0]._id.toHexString();

  it('Should remove a todo', (done) => {


    request(app)
      .delete(`/todos/${hexId}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo._id).toBe(hexId);
      }).end((err, res) => {
          if(err){
            return done(err);
          }

          Todo.findById(hexId).then((nothing) => {
            expect(nothing).toBeFalsy();
            done();
          }).catch((e) => done(e));
      });
    });
 });

  // it('Should return 404 if todo not found', (done) => {

  // var hexId = new ObjectID().toHexString();

  //   request(app)
  //     .delete(`/todos/${hexId}`)
  //     .expect(404)
  //     .end(done);
  // });
  //    });

  // it('Should return 404 if ObjectID not found', (done) => {

  //   request(app)
  //     .delete('/todos/123453')
  //     .expect(404)
  //     .end(done);
  // });


