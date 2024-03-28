let username = '';
let defaultName = username || 'Stranger';

console.log(defaultName); // Prints: Stranger

//operador de cortocircuito ||

let isLocked = false;
isLocked ?  console.log('You will need a key to open the door.')
    :console.log('You will not need a key to open the door.');

let favoritePhrase = 'Love That!';
    favoritePhrase === 'Love That!' ?
        console.log('I love that!') :
        console.log("I don't love that!");
    
