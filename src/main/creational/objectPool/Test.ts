interface ISomething {}
interface ISomethingElse extends ISomething {}

abstract class SomeBaseClass {}
class SomeClass extends SomeBaseClass implements ISomething, ISomethingElse {
  attribute1: ISomething;
  constructor(private readonly something: ISomething) {
    super();
  }
}

function testMe(something: ISomething) {
  let attribute2: ISomething;
}

let attribute3: ISomething;
