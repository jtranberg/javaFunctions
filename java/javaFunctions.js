function grumpus() {
console.log('not you');
console.log('go away');
console.log('get out');
}

for (let i = 0; i < 2; i++) {
grumpus();
}
function rollDice() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);

   
}
rollDice();
function throwDice() {
    rollDice();
    rollDice();
    rollDice();
    rollDice();
    rollDice();
    rollDice();
    rollDice();
}
throwDice();

function greet(nickname) {
    console.log(`Hi, ${nickname}`);
}
greet('jay');

function square(num) {
    console.log(num*num);
}
square(96);

function sum(x,y) {
    console.log(x+y);
}
sum(260,564)

// function isValidPassword(password, username) {
// const tooShort = password.length < 8;
// const hasSpaces = password.indexOf (' ') !== -1;
// const tooSimilar = password.indexOf (username) !== -1;
//  if (tooShort || hasSpaces || tooSimilar) return false;
//  return true;
// }

function avg(arr) {
    let total = 0;
    for(let num of arr) {
        total += num;
    }
    return total / arr.length;
}
avg([0,50])