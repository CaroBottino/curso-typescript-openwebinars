function suma(a: number, b: number = 0, c: number | undefined, d?: number): number {
    return a + b + c + d;
}

const result = suma(1, 2, 3, 4);
const result2 = suma(1, 2, undefined)

