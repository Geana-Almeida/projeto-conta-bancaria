import { Conta } from "./Conta";

export class ContaPoupanca extends Conta{
    
    private _aniversario: number;


	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number ,aniversario: number) {
		super(numero, agencia, tipo, titular, saldo);
        this._aniversario = aniversario;
	}


	public get aniversario(): number {
		return this._aniversario;
	}

	public set aniversario(value: number) {
		this._aniversario = value;
	}


    public visualizar(){
        super.visualizar();
        console.log(`Data de aniversario: ${this._aniversario}`);
    }
}