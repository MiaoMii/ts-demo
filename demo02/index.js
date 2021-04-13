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
// enum 枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 0] = "error";
})(Flag || (Flag = {}));
var a = Flag.success;
console.log(a);
// null undefined 属于其它类型（nerve）的子类型
// undefined或者number
var b = undefined;
//void 表示没有任何类型 一般定义方法没有返回值
function fun() { }
// nerve 永不存在的值
// 例： 总是会抛出异常或根本不会有返回值的函数表达式或箭头函数表达式的返回类型；变量也可以为nerve类型 当他们被永不为真的类型保护所约束时
// nerve 类型 是任何类型的子类型， 可以赋值给任意类型
// 没有类型是 nerve 的子类型或赋值给 nerve 类型（除了nerve 本身），any也不可以赋值给nerve
function error(message) {
    throw new Error(message);
}
//类
var Person = /** @class */ (function () {
    function Person(n) {
        this.name = n;
    }
    Person.prototype.run = function () {
        alert(this.name + "\u5728run");
    };
    return Person;
}());
// 继承 extends 、 super
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(n) {
        return _super.call(this, n) || this;
    }
    return Web;
}(Person));
var w = new Web('张三');
w.run();
