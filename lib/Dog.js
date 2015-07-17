'use strict';

function Dog(name, age){
  this.name = name;
  this.age = age;
}

Dog.prototype.ageInYears = function() {
  return this.age;
};

Dog.prototype.ageInDays = function() {
  return eval(this.age * 365);
};

Dog.prototype.ageInDogYears = function() {
  return eval(this.age * 7);
};
