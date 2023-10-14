// With conventional functions, you need to bind the function in a class declaration

class SomeClass {
    constructor(context) {
        this.context = context;
        this.somethingA = this.somethingA.bind(this);
    }

    somethingA() {
        console.log('Do Something A');
        console.log(`context: ${this.context}`);
    }
}

const someObject = new SomeClass('test');
someObject.somethingA();