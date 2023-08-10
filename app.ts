class Person {
  firstname = "";
}

// const myPerson = new Person();
// myPerson.takeIf<Person>((instance) => instance.firstname === "Peter");

class Test<T>{
  constructor(private value?: T) { }
  fetch(): T | undefined {
    return this.value
  }
}

const test = new Test<Person>()
const firstname = test.fetch()?.firstname ?? "Another name"
console.log(firstname)