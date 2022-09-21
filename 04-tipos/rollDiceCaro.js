function rollTheDice(userName, maxOfTries) {
    var results = [];
    var MAX_DICE_NUMBER = 6;
    if (!maxOfTries) {
        throw new Error('Max could not be undefined');
    }
    for (var index = 0; index < maxOfTries; index++) {
        var result = Math.ceil(Math.random() * MAX_DICE_NUMBER);
        if (result === MAX_DICE_NUMBER) {
            results.push("".concat(userName, " is a WINNER"));
        }
        else {
            results.push("".concat(userName, " is a LOSER"));
        }
    }
    return results;
}
var res = rollTheDice('Caro', 2);
console.log(res);
