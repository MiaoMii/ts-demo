// enum 枚举类型
enum Flag {
    success = 1,
    error= 0
}
let a: Flag = Flag.success
console.log(a)

// null undefined 属于其它类型（nerve）的子类型

// undefined或者number
let b: undefined | number = undefined;

//void 表示没有任何类型 一般定义方法没有返回值
function fun(): void {}

// nerve 永不存在的值
// 例： 总是会抛出异常或根本不会有返回值的函数表达式或箭头函数表达式的返回类型；变量也可以为nerve类型 当他们被永不为真的类型保护所约束时
// nerve 类型 是任何类型的子类型， 可以赋值给任意类型
// 没有类型是 nerve 的子类型或赋值给 nerve 类型（除了nerve 本身），any也不可以赋值给nerve
function error(message: string): never {
    throw new Error(message);
}


//类
class Person {
    name: string
    constructor(n: string) { //构造函数
        this.name = n
    }

    run(): void {
        alert(`${this.name}在run`)
    }
}
// 继承 extends 、 super
class Web extends Person {
    constructor(n: string) {
        super(n);
    }
}

let w = new Web('张三')
w.run()
