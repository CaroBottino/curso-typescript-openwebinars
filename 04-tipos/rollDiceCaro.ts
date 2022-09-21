function rollTheDiceCaro(userName: string, maxOfTries: number) {
    var results: string[] = [];
    var MAX_DICE_NUMBER: number = 6;

    if (!maxOfTries) {
        throw new Error('Max could not be undefined');
    }

    for (let index = 0; index < maxOfTries; index++) {
        const result = Math.ceil(Math.random() * MAX_DICE_NUMBER);

        if (result === MAX_DICE_NUMBER) {
            results.push(`${userName} is a WINNER`);
        } else {
            results.push(`${userName} is a LOSER`);
        }
    }

    return results;
}

var res: string[] = rollTheDiceCaro('Caro', 2);

console.log(res);