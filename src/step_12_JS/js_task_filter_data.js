const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
]

var map = new Map();
map.set("kitchen", false);
map.set("ballroom", false);
map.set("conservatory", false);
map.set("dining room", false);
map.set("billiard room", false);
map.set("library", false);

console.log(map)

newDevelopment.forEach(function(item) {
    item.rooms.forEach(function(room) {
        let current = map.get(String(Object.keys(room)));

        // console.log(current);

        if (Boolean(Object.values(room)) == true) {
            map.set(String(Object.keys(room)), Object.values(room));
        }

    })
});

console.log(map)

var result = [];
for (const [key, value] of map.entries()) {
    console.log(key + " = " + value);
    if (Boolean(value) === false) {
        result.push(key);
    }
}

console.log("Unvisited room found: " + result);
