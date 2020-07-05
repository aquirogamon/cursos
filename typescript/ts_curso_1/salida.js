var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Hello world");
// Types
var myString = "Hello world";
myString = 22 + "";
var myNumber = 22;
var myBool = true || false;
var myVar = "hello";
myVar = 22;
// Array
var StringArray = ["item1", "item2", "item3"];
var NumberArray = [1, 2, 3];
var BooleanArray = [true, false, false];
var AnyArray = [1, 2, true, "hello", [], {}];
console.log(AnyArray);
// Tuple
var strNumTuple;
strNumTuple = ["hello", 22];
//strNumTuple = ["world", 245, "", 1];
//void, undefined, null
var myVoid = undefined;
var myUndefined = undefined;
var myNull = null;
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof num1 === "string") {
        num1 = parseInt(num1);
    }
    if (typeof num2 === "string") {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function getName(firtName, lastName) {
    if (lastName == undefined) {
        return firtName;
    }
    return firtName + " " + lastName;
}
getName("Armando");
//document.write(getName("Armando", "Quiroga"));
function myVoidFucntion() {
    return;
}
function showTODO(todo) {
    console.log(todo.title + " - " + todo.text);
}
var myTodo = { title: "Eat dinner", text: "lorem" };
showTODO(myTodo);
console.log(showTODO(myTodo));
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is resgistered!");
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.AgeInYears = function () {
        return this.age + " years";
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paide invoice");
    };
    return User;
}());
var john = new User("john", "prueba@claro.com", 22);
document.write(john.AgeInYears());
console.log(john.register());
var Members = /** @class */ (function (_super) {
    __extends(Members, _super);
    function Members(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Members.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Members;
}(User));
var gordon = new Members(1, "Gordon", "gordon@email.com", 25);
gordon.payInvoice();
