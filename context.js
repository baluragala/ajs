console.log(this);

//created in gobal scope
function logFunction() {
  console.log(this);
}

function User(name, email) {
  this.name = name;
  this.email = email;
  this.logUser = function logUser() {
    console.log(this);
  };
}

var ben = new User("ben", "ben@o2labs.io");
ben.logUser(); // context is user instance
