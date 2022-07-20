class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    printNome() {
        return this.nome;
    }
}

class Cachorro extends Animal {
    constructor(nome) {
        super(nome);
        this.raca = "banana";
    }

    printRaca() {
        return this.raca;
    }
}

cachorro = new Cachorro("suco");
console.log(cachorro.printRaca());