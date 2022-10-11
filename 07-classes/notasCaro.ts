class Person {
    protected gender: string;
    protected name: string;
    private birthDate: Date;
    protected age: number;
    public alias: string;

    constructor(gender: string, name: string, birth: Date, alias: string) {
        this.gender = gender;
        this.name = name;
        this.birthDate = birth;
        this.alias = alias;

        this.setAge();
    }

    sayHello() {
        console.log('Hello!');
    }

    protected setName(name: string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    private setAge() {
        const today = new Date();
        const birthDate = this.birthDate;
        let age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        this.age = age; 
    }

    getAge() {
        return this.age;
    }
}

class Developer extends Person {
    languajes: string[];

    constructor(gender: string, name: string, birth: Date, alias: string, langs: string[]) {
        super(gender, name, birth, alias);

        this.languajes = langs;
    }

    program() {
        console.log(`I'm ${this.alias} and I program in ${this.languajes}`)
    }
}

const fede = new Person('male', 'Federico', new Date(1990, 5, 21), 'gordon');
const caro = new Developer('female', 'Carolina', new Date(1993, 3, 25), 'gordon', ['python', 'typescript'])

caro.sayHello();
console.log(caro.getName(), fede.getName());
console.log(caro.getAge(), fede.getAge());
caro.program();

