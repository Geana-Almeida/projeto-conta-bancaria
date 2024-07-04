import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Conta } from "./src/model/Conta"
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";

export function main() {

    let opcao: number;

    // //Novas Instâncias da classe conta utilizando o metodo constructor.
    // const c1: Conta = new Conta(1, 1234, 1, "João da Silva", 800000.00);
    // const c2: Conta = new Conta(2, 1234, 2, "Marcella Sanches", 600000.00);

    // c1.visualizar();
    // c2.visualizar();

    // //Utilizando o metodo set
    // // c2.saldo = 900000.00;
    // // console.log(`O Saldo da conta 02: ${c2.saldo}`);

    // //SACAR
    // // console.log(`\nSacar 100 Reais da Conta C1: ${c1.sacar(100)}`);
    // // c1.visualizar();
    // // console.log(`\nSacar 100 Reais da Conta C2: ${c2.sacar(100000000)}`);
    // // c2.visualizar();

    // //DEPOSITAR
    // console.log(`\nDepositar 100 Reais da Conta C1: ${c1.depositar(100000)}`);
    // c1.visualizar();
    // console.log(`\nDepositar  100 Reais da Conta C1: ${c2.depositar(100000)}`);
    // c2.visualizar();


    const cc1: ContaCorrente = new ContaCorrente(3, 1234, 1, 'Amanda Magro', 1000000.00, 100000.00);
    const cc2: ContaCorrente = new ContaCorrente(4, 1234, 1, "Joao da Silva", 1000.00, 100.00);

    cc1.visualizar();
    cc2.visualizar();

    console.log(`Saque de R$25000.00 na conta CC1: ${cc1.sacar(25000.00)}`);
    console.log(`Saque de R$1500.00 na conta CC2: ${cc2.sacar(1500.00)}`);


    const cp1: ContaPoupanca = new ContaPoupanca(5, 1234, 1, "Geana Almeida", 200000.00, 23);
    const cp2: ContaPoupanca = new ContaPoupanca(6, 1234, 1, "Cesar Augusto", 100000.00, 20);

    cp1.visualizar();
    cp2.visualizar();

    while (true) {

        console.log(colors.bg.black, colors.fg.yellowstrong);
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     "
            ,colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log(colors.fg.cyan)
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Geana Almeida");
    console.log("Generation Brasil - geana.almeida2000@gmail.com");
    console.log("https://github.com/Geana-Almeida");
    console.log("*****************************************************");
}

main();