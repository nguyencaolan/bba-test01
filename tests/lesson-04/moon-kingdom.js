function createCharacters() {
    const character =
        [
            {
                name: "Mario",
                level: 10,
                health: 100
            }
        ];
    const characterPowerUp = character.map(character => {
        return {
            name: character.name.toUpperCase(),
            level: character.level * 2,
            health: character.health * 3,
        };


    });
    return characterPowerUp;
}
const characterPowerUp = createCharacters();


const possibleWinners = characterPowerUp.filter(character => {
    return character.health > 1000
});

// sắp xếp score từ cao xuống thấp


const players = [
    { name: "Mario", score: 1000 },
    { name: "Luigi", score: 900 },
    { name: "Peach", score: 850 },
    { name: "Yoshi", score: 800 },
    { name: "Phong", score: 500 },
]
function printLeaderboard(players) {
    players.sort((a, b) => b.score - a.score);
    players.forEach((player, index) => {
        //console.log(`Huy Chương ${index + 1} : ${player.score}`);


        let medal = "";
        if (index === 0) {
            medal = "🥇";
        } else if (index === 1) {
            medal = "🥈";
        } else if (index === 2) {
            medal = "🥉";
        }

        console.log(`${medal} ${index + 1} .${player.name} - ${player.score} pts`);
    });


}
printLeaderboard(players);






