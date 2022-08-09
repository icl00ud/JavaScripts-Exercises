function Pessoa() {
    this.nome = "Israel";
    this.idade = 22;
    this.printNome = function (num) {
        console.log(num);
    }
    this.returnAnimal = function (animal) {
        return animal;
    }
}

function Animal() {
    this.nome = "Cachorro";
    this.raca = "Yorkshire";
}

var animal = new Animal();
var pessoa = new Pessoa();

console.log(pessoa.returnAnimal(animal).raca);