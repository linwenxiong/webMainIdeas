var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.fullName = firstName + " " + middleInitial;
    }
    Student.prototype.setData = function () {
        this.fullName = 'fullname';
    };
    Student.prototype.getData = function () {
        console.log(this.fullName, 'sdfsdfdsfsfsd');
    };
    return Student;
}());
var Stu2 = /** @class */ (function (_super) {
    __extends(Stu2, _super);
    function Stu2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stu2.prototype.myData = function () {
        console.log(this.firstName);
    };
    return Stu2;
}(Student));
var user = new Student("Jane", "M.");
console.log(user);
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function greeter(person : Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user = new Student("Jane", "M.", "User");
// document.body.innerHTML = greeter(user);
