class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    eat() {
        console.log('这是一个eat方法')
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    eat() {
        console.log(`${this.name}的狗吃饭`)
    }
}


class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }
    eat() {
        console.log(`${this.name}的猫吃饭`)
    }
}

let cat = new Cat('杨力')
cat.eat()
