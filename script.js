// SOLUTION 1
/*
let myFavoriteBands = ["R.E.M", "Nirvana", "Alice In Chains", "Foo Fighters"];

let yourFavoriteBand = prompt("What is your favorite band?");

for (let i = 0; i <= myFavoriteBands.length - 1; i++) {
    console.log(myFavoriteBands[i]);
    if (yourFavoriteBand == myFavoriteBands[i]) {
        alert("YEAH I LOVE THEM!");
        alert(`Your favorite band is ${myFavoriteBands.indexOf(yourFavoriteBand) + 1}`);
        break;
    } else {
        alert("Nah. They're pretty lame.");
    }
}

console.log(myFavoriteBands.indexOf(yourFavoriteBand));
*/

// SOLUTION 2

let myFavBands = ["nirvana", "alice in chains", "foo fighters"];

let yourFavBand = prompt("What is your favorite band?");

if (myFavBands.indexOf(yourFavBand.toLowerCase()) === -1) {
    alert("Nah. They're pretty lame.");
} else {
    alert("YEAH I LOVE THEM!");
}
