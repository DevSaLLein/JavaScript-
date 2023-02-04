//Iterators//
//Iterable//

[ 1, 2, 3, 4, 5] // => Iterable: São elementos em que eu posso iterar;


var txt = 'Dumblin'; // => Iterable;
var it = txt[Symbol.iterator](); // => Iterator

console.log(it.next());

for (letter of txt) {
    if(letter === 'b') {break}
    console.log(it.next())
}