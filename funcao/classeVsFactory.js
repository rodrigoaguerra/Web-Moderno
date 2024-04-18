class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log('Meu nome é ' + this.nome + ' ' + this.sobrenome);
    }
}

const p1 = new Pessoa('João', 'Pessoa');
p1.falar();

const criarPessoa = nome => {
    return {
        falar: () => console.log('Meu nome é ' + nome)
    }
};

const p2 =  criarPessoa('João');
p2.falar();