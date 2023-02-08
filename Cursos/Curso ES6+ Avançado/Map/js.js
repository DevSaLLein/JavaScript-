//Sua única diferença para o SET é que nos não vamos definir apenas o valor;
//e sim também a sua chave/índice(key);

let m = new Map();

//m.set( KEY, VALUE);
m.set('Isaac', '16'); // 'Isaac' => 16
m.set('Eliza', '30'); // 'Eliza' => 30


for(value of m){
    console.log(value);
}


it = m.values();

for( value of it){
    console.log(value)
}