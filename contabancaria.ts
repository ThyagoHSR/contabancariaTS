class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  depositar(valor: number): void {
    this.saldo += valor;
  }

  sacar(valor: number): void {
    if (valor > this.saldo) {
      throw new Error("Saldo insuficiente");
    }
    this.saldo -= valor;
  }

  obterSaldo(): number {
    return this.saldo;
  }
}

class Empregado {
  nome: string;
  sobrenome: string;
  cpf: string;

  constructor(nome: string, sobrenome: string, cpf: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
  }

  getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

class EmpregadoAssalariado extends Empregado {
  private salarioMensal: number;

  constructor(nome: string, sobrenome: string, cpf: string, salarioMensal: number) {
    super(nome, sobrenome, cpf);
    this.salarioMensal = salarioMensal;
  }

  calcularSalario(): number {
    return this.salarioMensal;
  }
}

class EmpregadoComissionado extends Empregado {
  private vendasBrutas: number;
  private taxaComissao: number;

  constructor(nome: string, sobrenome: string, cpf: string, vendasBrutas: number, taxaComissao: number) {
    super(nome, sobrenome, cpf);
    this.vendasBrutas = vendasBrutas;
    this.taxaComissao = taxaComissao;
  }

  calcularSalario(): number {
    return this.vendasBrutas * (this.taxaComissao / 100);
  }
}

class EmpregadoHorista extends Empregado {
  private salarioPorHora: number;
  private horasTrabalhadas: number;

  constructor(nome: string, sobrenome: string, cpf: string, salarioPorHora: number, horasTrabalhadas: number) {
    super(nome, sobrenome, cpf);
    this.salarioPorHora = salarioPorHora;
    this.horasTrabalhadas = horasTrabalhadas;
  }

  calcularSalario(): number {
    return this.salarioPorHora * this.horasTrabalhadas;
  }
}

// Exemplo de uso
const contaBancaria = new ContaBancaria(1000);

const empregadoAssalariado = new EmpregadoAssalariado("João", "Silva", "111.111.111-11", 5000);
const salarioAssalariado = empregadoAssalariado.calcularSalario();
contaBancaria.depositar(salarioAssalariado);

const empregadoComissionado = new EmpregadoComissionado("Maria", "Santos", "222.222.222-22", 10000, 10);
const salarioComissionado = empregadoComissionado.calcularSalario();
contaBancaria.depositar(salarioComissionado);

const empregadoHorista = new EmpregadoHorista("Lucas", "Souza", "333.333.333-33", 50, 40);
const salarioHorista = empregadoHorista.calcularSalario();
contaBancaria.depositar(salarioHorista);

const empregadoGenerico = new Empregado("Pedro", "Souza", "444.444.444-44");
const salarioGenerico = 2000;
contaBancaria.depositar(salarioGenerico);

console.log('O saldo da conta bancária é R$${contaBancaria.obterSaldo().toFixed(2)}');