class Parent {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }


    greet(from){
        console.log(`Happy B'Day ${this.name}, you are ${this.age} now. from ${from}`)
    }
}


class Child extends Parent {
    constructor(from, name, age){
        super(name, age)
        this.from = from;
    }


    changeName (name) {
        this.name = name
    }


}



const ch = new Child("goku", "joe", 26)

ch.greet("goku")

ch.changeName("akhil")

ch.greet("goku")