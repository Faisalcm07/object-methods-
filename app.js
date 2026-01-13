console.log("hello!")

const person = {
  name: "tom",
  age: 20,
  favouriteColour: "blue",
  sayHello: function (name) {
    console.log("Hello " + name + "!");
  },
   getAge: function () {
    return this.age;
  },
};

person.sayHello("Alice");

const age = person.getAge();

console.log(age);

const car = {
    make:"BMW",
    model:"g80", 
    colour: "green",
    advert: function (){
        return `This car is a ${car.make} ${car.model} and is the colour ${car.colour}`;
    }
}

console.log(car.advert());


const book = {
    title: "The lord of the rings", 
    Author: "Tolkien",
    pages: "1000",
    advert: function(){
        return `This book is called ${book.title} written by ${book.Author} and has over ${book.pages} pages. `
    }
}

console.log(book.advert())