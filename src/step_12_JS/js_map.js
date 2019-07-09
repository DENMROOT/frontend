const weapons = ["Knife", "Sword", "Bow"];
var brokenWeapon = function(item) {
    return `broken ${item}`
}

var brokenWeapons = weapons.map(item => brokenWeapon(item))