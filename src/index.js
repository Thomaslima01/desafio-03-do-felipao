class perfilHeroi{
    constructor(nome, idade,tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }

    escrever(){
        console.log(`O ${this.nome} é um ${this.tipo} com ${this.idade} anos de idade e atacou usando ${this.ataque}`)
    }
}
let guerreiro = new perfilHeroi("Ragnar", 35, "guerreiro","espada")

guerreiro.escrever()