function createArray<T>(items: T[]): T[] {
    return new Array().concat(items);
}

let myNumArr = createArray<number>([100, 200, 300]);
let myStrArr = createArray<string>(['Hello', 'World']);
let stringOrNumber = createArray<number | string> ([100, 'Hello']);

myNumArr.push(400);
// myNumArr.push('Hi'); 
//esta bien que de error, eso implica que la validación de tipos está funcionando bien

myStrArr.push('Hello TypeScript');
// myStrArr.push(500); // idem arriba

// stringOrNumber.push(true); // idem... no puedo meter un booleano, solo string o number :)

// estas validaciones ya no hacen falta porque TS se encaarga de eso :)
// function isNumber<>(x) {
//     return typeof x === 'number';
// }
// function isString(x) {
//     return typeof x === 'string';
// }
// console.group('Type validation');
// console.log('myNumArr contains only numbers:', myNumArr.every(isNumber));
// console.log('myStrArr contains only strings', myStrArr.every(isString));
// console.log(
//     'stringOrNumber contains only string or number:',
//     stringOrNumber.every((x) => isString(x) || isNumber(x))
// );
// console.groupEnd();

// Display Tupe value
// acá aplico destructuring de arrays :)
function displayTupeType<A, B>([index, value]: [A, B]) {
    console.group('Tuple type validation');
    console.log('index is', typeof index);
    console.log('value is', typeof value);
    console.groupEnd();
}

displayTupeType<number, string>([1, 'Hi']); // number, string

class Manager<X> {
    items: X[];

    constructor() {
        this.items = [];
    }

    addItem(newItem: X): void {
        this.items.push(newItem);
    }

    hasSameType() {
        const firstItemType = typeof this.items[0];

        if (firstItemType === 'undefined') {
            throw new Error('Push a new item before call this method');
        }

        return this.items.every((item) => typeof item === firstItemType);
    }

    getItems() {
        return this.items;
    }
}

const manager = new Manager<number>();
manager.addItem(1);
console.group('Manager class type validation');
console.log('All items has same type', manager.hasSameType());
console.groupEnd();

const hackedManager = new Manager<number>();
hackedManager.addItem(1);
hackedManager.addItem(('two' as any) as number); //validación correcta, necesita ser number
hackedManager.addItem(3);

console.group('Hacked Manager should contains a one string');
console.log('All items has same type > should be false. It is? ', manager.hasSameType());
// console.log('Founded a string:', manager.getItems().some(isString)); //ya no hace falta, lo hace TS
console.groupEnd();
