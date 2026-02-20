//Bai 1
const characters = [
    {
        name: "Hanh",
        level: 4,
        health: 20
    },
    {
        name: "Ivy",
        level: 1,
        health: 5000
    }
]

function createCharacters(characters) {
    const charactersPowerUp = characters.map((characters) =>
    ({
        name: characters.name.toUpperCase(),
        level: characters.level * 2,
        health: characters.health * 3
    })
    );
    console.log(charactersPowerUp);

    const possibleWinners = characters.filter(characters => characters.health > 1000);
    console.log(possibleWinners);
}

createCharacters(characters);

//Bai 2
const players = [
    {
        name: "Mario",
        score: 4000
    },
    {
        name: "Luigi",
        score: 2000
    },
    {
        name: "Peach",
        score: 1000,
    },
    {
        name: "Yoshi",
        score: 3000
    }
]

function printLeaderboard(players) {
    const sortPlayers = players.sort((a, b) => b.score - a.score);
    for (let i = 0; i < sortPlayers.length; i++) {
        if (i === 0) {
            console.log("🥇 1. " + sortPlayers[i].name + " - " + sortPlayers[i].score + " pts")
        } else if (i === 1) {
            console.log("🥈 2. " + sortPlayers[i].name + " - " + sortPlayers[i].score + " pts")
        } else if (i === 2) {
            console.log("🥉 3. " + sortPlayers[i].name + " - " + sortPlayers[i].score + " pts")
        } else {
            console.log(" " + (i + 1) + ". " + sortPlayers[i].name + " - " + sortPlayers[i].score + " pts")
        }
    }
}
printLeaderboard(players);