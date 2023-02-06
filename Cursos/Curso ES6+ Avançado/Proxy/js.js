let obj = {
    name: 'Elizabeth',
    age: 39
};

// let proxy = new Proxy( target, headler)

let proxy = new Proxy(obj, {
    get(target, name) {
        console.log('Alguém está pedindo o nome');
        return target[name];

    },

    set(target, name, value) {
        console.log(' Alguém está mudando o nome')
        target[name] = value.toUpperCase(); 
    }
});