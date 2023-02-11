class animal {
    //Método obrigatório para uma classe
    constructor(kind, sound){

        this.kind = kind;
        this.sound = sound;
    }
    hello() { 
       console.log(`${this.sound}, eu sou um ${this.kind}! `);
    }

    //Um método pertecente apenas para a classe animal, as variáveis não pegam esse método(cat and dog)
    static info() {
        console.log('This is a class to create animals!');
    } 

    //Uma PROPRIEDADE dada;
    get name(){
        console.log(`${this.sound}, My name is Isaac :)`);
    }
    
    set nickname(nick) {
        this.nick = nick
    }
}

// let animal = class {

// } 

const cachorro = new animal('cachorro', 'auau');
const gato = new animal('gato', 'meow');
const avestruz = new animal('avestruz' , '?');
const ave = new animal('ave', '??');


// ESTENDANDO CLASSES

class Animal {
    constructor(name) {
        this.name = name;

    }

    hello() {
        console.log(`I'm a ${this.name}`);

    }
}

//Todas as coisas que tenho em Animal, terei em Dog(name)
class Dog extends Animal {
    constructor(name, sound, kind) {
        //Como estamos estendendo uma class, precisamos primeiro chamar as coisas que estão na class 'mãe' com a palavra super, e como precisamos de uma nova 
        //var name que não está na class 'mãe', passamos ele como parâmetro
        super(name);
        this.sound = sound;
        this.kind = kind

    }

    bark() {
        console.log(`${this.sound}, I'm a ${this.name}`);

    }
}

const elephant = new Animal('Dumbo');
const dog = new Dog( 'au au', 'cachorro');