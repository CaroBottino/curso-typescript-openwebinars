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
var Person = /** @class */ (function () {
    function Person(gender, name, birth, alias) {
        this.gender = gender;
        this.name = name;
        this.birthDate = birth;
        this.alias = alias;
        this.setAge();
    }
    Person.prototype.sayHello = function () {
        console.log('Hello!');
    };
    Person.prototype.setName = function (name) {
        this.name = name;
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setAge = function () {
        var today = new Date();
        var birthDate = this.birthDate;
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        this.age = age;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(gender, name, birth, alias, langs) {
        var _this = _super.call(this, gender, name, birth, alias) || this;
        _this.languajes = langs;
        return _this;
    }
    Developer.prototype.program = function () {
        console.log("I'm ".concat(this.alias, " and I program in ").concat(this.languajes));
    };
    return Developer;
}(Person));
var fede = new Person('male', 'Federico', new Date(1990, 5, 21), 'gordon');
var caro = new Developer('female', 'Carolina', new Date(1993, 3, 25), 'gordon', ['python', 'typescript']);
caro.sayHello();
console.log(caro.getName(), fede.getName());
console.log(caro.getAge(), fede.getAge());
caro.program();
