class Person {
    #age = 25;  // private field

    #showAge() { // private method
        console.log(this.#age);
    }

    introduce() {
        this.#showAge(); // ✅ works
    }
}

const p = new Person();

p.introduce(); // 25
// console.log(p.#age); // ❌ SyntaxError
