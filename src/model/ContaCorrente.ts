import {Conta} from "./Conta"

export class ContaCorrente extends Conta{
    private _limite: number;


	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number ,limite: number) {
		super(numero, agencia, tipo, titular, saldo)
        this._limite = limite;
	}


	public get limite(): number {
		return this._limite;
	}

	public set limite(value: number) {
		this._limite = value;
	}

    public visualizar(){
        super.visualizar();
        console.log(`Limite da conta: ${this._limite}`);
    }

    public sacar(valor: number):boolean{
        
        if((this.saldo + this._limite) >= valor){
            this.saldo -= valor;
            return true;
        }

        console.log(`Saldo é insuficiente!`)
        return false;
        
    }


}