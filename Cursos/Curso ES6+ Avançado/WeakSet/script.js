let obj1 = {
    name: 'Isaac',
    age: '16'
};

let obj2 = {
    name: 'Jonas',
    age: 22
};

//Diferentemente do SET convencional, o WeakSet so recebe em seu parâmetro valores do tipo objetos
let ms = new WeakSet([obj1, obj2]);


console.log(ms.has(obj1));

ms.add({
    type:'obj'
});


ms.delete(obj2);

console.log(ms)
