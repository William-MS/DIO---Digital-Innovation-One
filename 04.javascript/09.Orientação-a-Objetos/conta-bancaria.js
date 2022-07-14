class contaBancaria {
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){

        if (this.saldo >= valor){
            return this._saldo = this._saldo - valor;
        } else {
            return `Operação negada`;
        }
    }

    depositar(valor){
        return this._saldo = this._saldo + valor;
    }
}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);
        this._cartaoCredito = cartaoCredito;
        this.tipo = "crédito";
    }

    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        return this._cartaoCredito = valor;
    }
}

class contaPoupança extends contaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);
        this.tipo = "poupança";
    }
}

class contaUniversitaria extends contaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);
        this.tipo = "universitária";
    }

    sacar(valor){
        if (this.saldo >= valor && valor <= 500){
            return this._saldo = this._saldo - valor;
        } else {
            return `Operação negada`;
        }
    }
}