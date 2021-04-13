interface FullsName {
    firstName: string;
    secondName: string; //注意为分号
}

function getFunllName(name: FullsName): void {
    console.log(name.firstName + name.secondName)
}

//getFunllName({firstName: '张', secondName: '三', age: 20}) //  Argument of type '{ firstName: string; secondName: string; age: number; }' is not assignable to parameter of type 'Fullname'.Object literal may only specify known properties, and 'age' does not exist in type 'Fullname'.

let obj = {firstName: '张', secondName: '三', age: 20}  //该方式只要对象中包含 接口中定义的属性即可
getFunllName(obj)


interface Animal {
    name: string;
    eat(): string
}

interface Person extends Animal {
    work(): void
}

class Programmer {
    name: string

    constructor(name: string) {
        this.name = name
    }

    code() {
        console.log(`${this.name}写代码 `)
    }
}

class Web extends Programmer implements Person {
    constructor(name: string) {
        super(name)
    }
    eat(): string {
        console.log(`${this.name}吃饭`)
        return `${this.name}吃饭`
    }

    work() {
        console.log(`${this.name}工作`)
    }
}

let web = new Web('小黑')
web.code()
