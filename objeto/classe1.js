class Lancamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = [];
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario () {
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado;
    }
}

const salaral = new Lancamento('Salario', 45000);
const contadeLuz = new Lancamento('Luz', -220);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salaral, contadeLuz);
console.log(contas.sumario());