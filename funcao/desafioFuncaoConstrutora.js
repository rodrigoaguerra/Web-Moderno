function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    
    this.falar = function () {
        console.log('Meu nome é ' + this.nome + ' ' + this.sobrenome);
    }
}

const p1 = new Pessoa('João', 'Pessoa');
p1.falar();
console.log(p1.nome);