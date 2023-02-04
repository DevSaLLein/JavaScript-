// * => Generator
function* getName(){
    //Parecido com um 'return'
    console.log('Chamando o primeiro nome:');
    yield 'Isaac';

    console.log('Chamando o segundo nome:');
    yield 'Tayssa';

    console.log('Chamando o terceironome:');
    yield 'Eliza';
}

const names = getName();

//Generator é um tipo de Iterator;
console.log(names.next().value);


//Ele nao repetiu o yield Isaac!
for(txt of names){
    console.log(txt);
    if(txt === 'Tayssa') break;
}


// A J A X 

function ajax(url){
    fetch(url)
        .then( data => data.json())
        .then( data => dados.next(data))
}



function* ajaxGen() {
    console.log('Buscando posts. . . ');
    const data = yield ajax('https://api.github.com/users/diego3g');
    console.log(data);

    console.log('Buscando dados. . . ')
    const gitub = yield ajax('https://api.github.com/users/diego3g');
    console.log(gitub)
}   


const dados = ajaxGen();
dados.next();