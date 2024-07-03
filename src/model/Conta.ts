export class Conta{
    //Definir os Atributos da Classe(Caracteristicas)
    private _numero: number;
    private _agencia: number;
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    //ctrl + shift + p --> typescript: Generate Constructor
    //Definimos o Metodo contrutor,responsavel por criar os objetos da Classe
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
		this._numero = numero;
		this._agencia = agencia;
		this._tipo = tipo;
		this._titular = titular;
		this._saldo = saldo;

    }


    //ctrl + shift + p --> typescript: Generate ALL Getter and Setter
    //Definimos os Metodos Get e Set de cada atributo
	public get numero(): number {
		return this._numero;
	}

	public get agencia(): number {
		return this._agencia;
	}

	public get tipo(): number {
		return this._tipo;
	}

	public get titular(): string {
		return this._titular;
	}

	public get saldo(): number {
		return this._saldo;
	}

	public set numero(value: number) {
		this._numero = value;
	}

	public set agencia(value: number) {
		this._agencia = value;
	}

	public set tipo(value: number) {
		this._tipo = value;
	}

	public set titular(value: string) {
		this._titular = value;
	}

	public set saldo(value: number) {
		this._saldo = value;
	}

    //metodo sacar dinheiro da conta
    public sacar(valor: number):boolean{
        
        if(this._saldo < valor){
            console.log(`Saldo é insuficiente!`)
            return false;
        }

        this._saldo -= valor;
        return true;
    }


    //Metodo Depositar
    public depositar(valor: number):void{
        this._saldo += valor
    }

    //metodo para visualizar todos os dados do objeto
    public visualizar():void{
        let tipo: string = "";
        switch(this._tipo){
            case 1: 
                tipo = "Conta Corrente";
                break;

            case 2:
                tipo = "Conta Poupança"

        }


        console.log("\n*****************************");
        console.log('Dados da Conta');
        console.log("\n*****************************");
        console.log(`\nNumero da conta: ${this.numero}`);
        console.log(`\nNumero da agencia: ${this.agencia}`);
        console.log(`\nTipo da Conta: ${tipo}`);
        console.log(`\nTitular da conta: ${this.titular}`);
        console.log(`\nSaldo da conta: ${this.saldo}`);
    }

}

