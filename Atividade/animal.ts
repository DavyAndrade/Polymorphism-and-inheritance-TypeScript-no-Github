
    export class Animal {
    nome: string;
    idade: number;
    raça: string;
    som: string;
    ação: string;

    constructor(nome: string, raça: string, idade: number, som: string, ação: string){
        this.nome = nome
        this.raça = raça
        this.idade = idade
        this.som = som
        this.ação = ação
    }
    animalInfo(){
        console.log(`\nMeu nome é ${this.nome} e sou um ${this.raça} de ${this.idade} anos!`)
    }
    animalAcao(){
        console.log(`Nesse momento eu estou ${this.ação} e ${this.som}`)
    }
}