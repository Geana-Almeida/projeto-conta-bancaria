import { Conta } from "../model/Conta";

export interface ContaRepository{



    //Métodos do CRUD

    procurarPorNumero(numero: number):void;
    listarTodas():void;
    cadastrar(conta: Conta):void;
    atualizar(conta: Conta):void;
    deletar(numero: number): void;
    procurarPorTitular(titular: string): void;

    //Metodos Bancarios
    sacar(numero:number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;


}