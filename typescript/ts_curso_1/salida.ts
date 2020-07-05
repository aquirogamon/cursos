console.log("Hello world");

// Types

var myString: string = "Hello world";
myString = 22 + "";

var myNumber: number = 22;
var myBool: boolean = true || false;

let myVar: any = "hello";
myVar = 22;

// Array
var StringArray: string[] = ["item1", "item2", "item3"];
var NumberArray: number[] = [1, 2, 3];
var BooleanArray: boolean[] = [true, false, false];
var AnyArray: any[] = [1, 2, true, "hello", [], {}];
console.log(AnyArray);

// Tuple
var strNumTuple: [string, number];
strNumTuple = ["hello", 22];
//strNumTuple = ["world", 245, "", 1];

//void, undefined, null
let myVoid: void = undefined;
let myUndefined: undefined = undefined;
let myNull: null = null;

function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

let mySum = function (num1: number | string, num2: number | string): number {
  if (typeof num1 === "string") {
    num1 = parseInt(num1);
  }
  if (typeof num2 === "string") {
    num2 = parseInt(num2);
  }
  return num1 + num2;
};

function getName(firtName: string, lastName?: string): string {
  if (lastName == undefined) {
    return firtName;
  }
  return `${firtName} ${lastName}`;
}

getName("Armando");

//document.write(getName("Armando", "Quiroga"));

function myVoidFucntion(): void {
  return;
}

// Interfaces

interface ITodo {
  title: string;
  text: string;
}

function showTODO(todo: ITodo) {
  console.log(`${todo.title} - ${todo.text}`);
}

let myTodo: ITodo = { title: "Eat dinner", text: "lorem" };

showTODO(myTodo);
console.log(showTODO(myTodo));

class User {
  private name: string;
  public email: string;
  protected age: number;

  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  register() {
    console.log(`${this.name} is resgistered!`);
  }

  showMeAge() {
    return this.age;
  }

  public AgeInYears() {
    return this.age + " years";
  }

  payInvoice() {
    console.log(`${this.name} paide invoice`);
  }
}

var john = new User("john", "prueba@claro.com", 22);
document.write(john.AgeInYears());
console.log(john.register());

class Members extends User {
  id: number;
  constructor(id, name, email, age) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

var gordon = new Members(1, "Gordon", "gordon@email.com", 25);
gordon.payInvoice();
