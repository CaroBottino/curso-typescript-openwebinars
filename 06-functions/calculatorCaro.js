var ACTIONS2 = [
    {
        name: 'ADD',
        "do": function (a, b) {
            return a + b;
        }
    },
    {
        name: 'SUBTRACT',
        "do": function (a, b) {
            return a - b;
        }
    },
    {
        name: 'DIVIDE',
        "do": function (a, b) {
            if (b === 0) {
                throw new Error('Division by zero is undefined');
            }
            return a / b;
        }
    },
    {
        name: 'MULTIPLY',
        "do": function (a, b) {
            return a * b;
        }
    },
];
// Element is type HTMLElement
function updateUserMoneyText2(element, actualMoney) {
    element.innerHTML = actualMoney.toString();
}
function randomNumber2(max) {
    return Math.round(Math.random() * max);
}
function playTheGame2(_a) {
    var actions = _a.actions, totalClick = _a.totalClick, onError = _a.onError, onSuccess = _a.onSuccess, userMoney = _a.userMoney;
    var randomIndex = randomNumber2(actions.length);
    var A_MILLION = 1000000;
    var action = actions[randomIndex];
    if (!action) {
        onError(randomIndex, actions);
        return userMoney;
    }
    if (userMoney >= A_MILLION) {
        onSuccess(totalClick);
    }
    if (userMoney <= 0) {
        throw new Error('Money must be positive');
    }
    var newMoney = Math.round(action["do"](userMoney, randomNumber2(actions.length * 100)));
    return newMoney;
}
function disableClickButton2($button, handleClickCaro) {
    $button.disabled = true;
    $button.removeEventListener('click', handleClickCaro);
}
var $buttonCaro = document.getElementById('buttonCaro');
var $userMoneyTextCaro = document.getElementById('moneyTextCaro');
var userMoney2 = 1000;
var totalClick2 = 0;
updateUserMoneyText2($userMoneyTextCaro, userMoney2);
$buttonCaro.addEventListener('click', function handleClickCaro() {
    totalClick2++;
    var params2 = {
        actions: ACTIONS2,
        totalClick: totalClick2,
        userMoney: userMoney2,
        onError: function (index, actions) {
            console.log('salio por onError: ', index, actions);
        },
        onSuccess: function (totalClick2) {
            disableClickButton2($buttonCaro, handleClickCaro);
            console.log('Te has convertido en millonario al hacer un total de: ', totalClick2, ' clicks');
        }
    };
    userMoney2 = playTheGame2(params2);
    updateUserMoneyText2($userMoneyTextCaro, userMoney2);
});
