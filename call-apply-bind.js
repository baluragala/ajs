function introduce(name, strength) {
  console.log("Hi! I'm " + name + " and I am good at " + strength + ".");
  console.log("The value of this is " + this + ".");
}

introduce("Bala", "training"); // the way you usually call it
introduce.call(this, "Bala", "training"); // pass the arguments one by one after the contextt
introduce.apply({}, ["Bala", "training"]); // pass the arguments in an array after the context
