class A {
  constructor() {
    console.log("A is created");
  }
  methodA() {
    console.log("Method A in class A");
  }
}
class B {
  constructor() {
    console.log("B is created");
  }
}
a = new A();
b = new B();
a.methodA();
b.__proto__ = a;
b.methodA();
