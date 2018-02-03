var numbers = [1, 2, 3, 4, 5];

numbers[Symbol.iterator] = function() {
  console.log(arguments);
  var index = 0;
  return {
    next() {
      if (index < numbers.length) {
        return { value: numbers[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
};

for (let n of numbers) {
  console.log(n);
}
