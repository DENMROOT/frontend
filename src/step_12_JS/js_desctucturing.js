var game = { contenders: [
        {name: "Denys", weapon: "Knife"},
        {name: "Oleg", weapon: "Bazooka"}
    ]};

var [firstName, secondName] = [game.contenders[0].name, game.contenders[1].name]
var [{weapon: firstWeapon}, {weapon: secondWeapon}] = game.contenders;

console.log(firstName)
console.log(firstWeapon)

