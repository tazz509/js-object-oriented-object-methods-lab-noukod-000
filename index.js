function BoardMember (name, homestate, training){
  this.name = name;
  this.homestate = homestate;
  this.training = training
  this.veto = function(){
    console.log(`No, I must disagree`);
  }
    this.approve = function(){
      console.log('You can do that!');
    }
    this.doCharity = function(){
      console.log('I like to help people.');
    }
    this.releasePressStatement = function(){
      console.log('You will see great things from Scuber.');
    }
    this.sayHi = function(){
      console.log('Hi, my name is ${name}. I am from ${homestate}, and I was trained in {training}.');
    }

  }
}
 
let lauren = new User('lauren', 'lauren@gmail.com')
lauren.sayHello()
// "Hello everybody, my name is lauren!"
 
let fred = new User('fred', 'fred@gmail.com')
fred.sayHello()
// "Hello everybody, my name is fred!"
 
let bob = new User('bob', 'bob@gmail.com')
bob.sayHello()
// "Hello everybody, my name is bob!"