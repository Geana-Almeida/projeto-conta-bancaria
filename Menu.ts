import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ContaController } from "./src/controller/ContaController";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupannca";



export function main() {

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tipoContas = ['Conta Corrente', 'Conta Poupanca'];

    const contas: ContaController = new ContaController();

    contas.cadastrar(new ContaCorrente(contas.gerarNumero() , 1234, 1, "Geana", 100000, 10000))

    
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
                
                console.log('Digite o Número da Agência: ');
                agencia = readlinesync.questionInt("");

                console.log('Digite o Nome do Titular da Conta: ');
                titular = readlinesync.question("");

                console.log('Digite o Tipo da Conta: ');
                tipo = readlinesync.keyInSelect(tipoContas, "", { cancel : false}) + 1;

                console.log('Digite o Saldo da Conta: ');
                saldo = readlinesync.questionFloat("");

                switch(tipo){
                    case 1:
                        console.log('Digite o Limite da Conta: ');
                        limite = readlinesync.questionInt("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero() , agencia, tipo, titular, saldo, limite)
                        )
                        break;

                    case 2:
                        console.log('Digite a Data de Aniversário de Conta: ');
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero() , agencia, tipo, titular, saldo, aniversario)
                        )
                        break;
                }
                
                

                keyPress();
                break;

            case 2:
                console.log("\n\nListar todas as Contas\n\n");
                contas.listarTodas();
                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");
                console.log("Digite o número da Conta: ")
                numero = readlinesync.questionInt("");

                contas.procurarPorNumero(numero);
                keyPress();
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                console.log("Digite o número da Conta: ")
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta) {

                    console.log('Digite o Número da Agência: ');
                    agencia = readlinesync.questionInt("");

                    console.log('Digite o Nome do Titular da Conta: ');
                    titular = readlinesync.question("");

                    console.log('Digite o Saldo da Conta: ');
                    saldo = readlinesync.questionFloat("");

                    tipo = conta.tipo;

                    switch (tipo) {
                        case 1:
                            console.log('Digite o Limite da Conta: ');
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            )
                            break;
                        case 2:
                            console.log('Digite a Data de Aniversário da Conta: ');
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            )
                            break;
                    }

                } else {
                    console.log(`\nA Conta número: ${numero} não foi encontrada!`)
                }

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);

                console.log("Digite o número da Conta: ")
                numero = readlinesync.questionInt("");

                contas.deletar(numero);

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);

                console.log("Digite o número da Conta: ")
                numero = readlinesync.questionInt("");

                console.log("Digite o valor do saque: ")
                valor = readlinesync.questionFloat("");

                contas.sacar(numero, valor);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepósito\n\n", colors.reset);

                console.log("Digite o número da Conta: ")
                numero = readlinesync.questionInt("");

                console.log("Digite o valor do depósito: ")
                valor = readlinesync.questionFloat("");

                contas.depositar(numero, valor);

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                console.log("Digite o número da Conta de Origem: ")
                numero = readlinesync.questionInt("");

                console.log("Digite o número da Conta de Destino: ")
                numeroDestino = readlinesync.questionInt("");

                console.log("Digite o valor do saque: ")
                valor = readlinesync.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);

                keyPress()
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

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();