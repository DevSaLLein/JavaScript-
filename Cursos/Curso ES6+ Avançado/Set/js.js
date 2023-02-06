let mySet = new Set(['Isaac', 'Tayssa', 'Elizabeth']);
// mySet.size = tamanho do objeto da classe Set;

// mySet.add() = Adiciona uma nova instância do objeto da classe Set;

// Irá adicionar apenas uma única instância com o valor 'Cesar';
mySet.add('Cesar');
mySet.add('Cesar');
mySet.add('Cesar');
mySet.add('Cesar');

// mySet.delete() = Deleta uma instância no obj;
mySet.delete('Cesar');


//mySet.has() = Sai um valor booleano indicando se existe ou não uma instância no objeto com o valor dado no parâmetro
console.log(mySet.has('Isaac'));



// OBS: ele não é baseado em índices como o ARRAY;


// mySet é um tipo de interator
let it = mySet.values();

for(instancia of it){
    console.log(instancia)
}

  