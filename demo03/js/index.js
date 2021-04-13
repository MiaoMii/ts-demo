"use strict";
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
function getFunllName(name) {
    console.log(name.firstName + name.secondName);
}
//getFunllName({firstName: '张', secondName: '三', age: 20}) //  Argument of type '{ firstName: string; secondName: string; age: number; }' is not assignable to parameter of type 'Fullname'.Object literal may only specify known properties, and 'age' does not exist in type 'Fullname'.
var obj = { firstName: '张', secondName: '三', age: 20 }; //该方式只要对象中包含 接口中定义的属性即可
getFunllName(obj);
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.code = function () {
        console.log(this.name + "\u5199\u4EE3\u7801 ");
    };
    return Programmer;
}());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.eat = function () {
        console.log(this.name + "\u5403\u996D");
        return this.name + "\u5403\u996D";
    };
    Web.prototype.work = function () {
        console.log(this.name + "\u5DE5\u4F5C");
    };
    return Web;
}(Programmer));
var web = new Web('小黑');
web.code();
//# sourceMappingURL=index.js.map