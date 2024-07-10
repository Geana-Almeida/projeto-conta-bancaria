import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";


export class ContaController implements ContaRepository{


    private listaContas: Array<Conta> = new Array<Conta>();

    public numero: number = 0;
 

    procurarPorNumero(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            buscaConta.visualizar();
        }
        else{
            console.log("\nA Conta não foi encontrada")
        }
    }

    listarTodas(): void {
        for(let conta of this.listaContas){
            conta.visualizar();
        }
    }

    cadastrar(conta: Conta): void {
        this.listaContas.push(conta);
        console.log("A conta foi cadastrada com sucesso!")
    }

    atualizar(conta: Conta): void {
        let buscaConta = this.buscarNoArray(conta.numero);

        if(buscaConta !==  null){
            this.listaContas[this.listaContas.indexOf(buscaConta)] = conta;
            console.log("\nA Conta foi atualizada!")
        }else
            console.log("\nA Conta não foi encontrada!");
    
    }

    deletar(numero: number): void {
        let buscaConta = this.buscarNoArray(numero);

        if(buscaConta !== null){
            this.listaContas.splice(this.listaContas.indexOf(buscaConta), 1);
            console.log('\nA conta foi excluída!');
        }else{
            console.log("\nA conta não foi encontrada!");
        }

    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    
    //Metodos auxiliares

    public gerarNumero(): number{
        return ++ this.numero
    }

    public buscarNoArray(numero: number): Conta | null{
        for(let conta of this.listaContas){
            if(conta.numero === numero){
                return conta;
            }
        }

        return null;
    }
}