type Action = {
    name: string,
    // do: Function, /// esto no me sirve! no valida el contrato... mejor:
    do: (a: number, b: number) => number,
}

const ACTIONS2: Action[] = [
    {
      name: 'ADD',
      do: (a: number, b: number): number => {
        return a + b;
      },
    },
    {
      name: 'SUBTRACT',
      do: (a: number, b: number): number => {
        return a - b;
      },
    },
    {
      name: 'DIVIDE',
      do: (a: number, b: number): number | never => {
        if (b === 0) {
          throw new Error('Division by zero is undefined');
        }
      
        return a / b;
      },
    },
    {
      name: 'MULTIPLY',
      do: (a: number, b: number): number => {
        return a * b;
      },
    },
];
  
// Element is type HTMLElement
function updateUserMoneyText2(element: HTMLElement, actualMoney: number) {
    element.innerHTML = actualMoney.toString();
}
  
function randomNumber2(max: number): number {
    return Math.round(Math.random() * max);
}
  
function playTheGame2({ actions, totalClick, onError, onSuccess, userMoney }: PlayTheGameParams): number | never {
    const randomIndex: number = randomNumber2(actions.length);
    const A_MILLION: number = 1000000;
    const action = actions[randomIndex];
  
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
  
    const newMoney: number = Math.round(action.do(userMoney, randomNumber2(actions.length * 100)));
  
    return newMoney;
}
  
function disableClickButton2($button: HTMLButtonElement, handleClickCaro: () => void) {
    $button.disabled = true;
    $button.removeEventListener('click', handleClickCaro);
}
  
const $buttonCaro = document.getElementById('buttonCaro') as HTMLButtonElement;
const $userMoneyTextCaro = document.getElementById('moneyTextCaro') as HTMLAnchorElement;
let userMoney2 = 1000;
let totalClick2 = 0;
  
updateUserMoneyText2($userMoneyTextCaro, userMoney2);

type PlayTheGameParams = {
    actions: Action[],
    totalClick: number,
    userMoney: number,
    // onError: Function,
    onError: (randomIndex: number, actions: Action[]) => void,
    // onSuccess: Function,
    onSuccess: (totalClick: number) => void,
}
  
$buttonCaro.addEventListener('click', function handleClickCaro() {
    totalClick2++;
  
    const params2: PlayTheGameParams = {
      actions: ACTIONS2,
      totalClick: totalClick2,
      userMoney: userMoney2,
      onError: function (index: number, actions: Action[]) {
        console.log('salio por onError: ', index, actions);
      },
      onSuccess: function (totalClick2) {
        disableClickButton2($buttonCaro, handleClickCaro);
        console.log('Te has convertido en millonario al hacer un total de: ', totalClick2, ' clicks');
      },
    };
  
    userMoney2 = playTheGame2(params2);
  
    updateUserMoneyText2($userMoneyTextCaro, userMoney2);
});
  