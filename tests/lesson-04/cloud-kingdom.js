const playerName = "Mario"
const currentLives = 3
const coins = [
    {
        level: 1,
        total: 25
    },
    {
        level: 2,
        total: 30
    },
    {
        level: 3,
        total: 45
    }
]

let sumCoins = 0
for (let i = 0; i < coins.length; i++) {
    sumCoins += coins[i].total;
}
const avgCoins = sumCoins / 3;
const modCoins = sumCoins % 3;
console.log(modCoins)