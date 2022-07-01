class Person {
  firstname = "";
}

const myPerson = new Person();
myPerson.takeIf<Person>((instance) => instance.firstname == "Peter");
