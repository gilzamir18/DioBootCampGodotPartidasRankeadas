// Importando o módulo readline
const readline = require('readline-sync');


function vitoriasrankeadas(qtd_vitorias, qtd_derrotas)
{
    let saldo = qtd_vitorias - qtd_derrotas
    let nivel = ""
    if (saldo <= 10)
    {
        nivel = "Ferro";
    } else if (saldo <= 20)
    {
        nivel = "Bronze";
    } else if (saldo <= 50)
    {
        nivel = "Prata";
    } else if (saldo <= 80)
    {
        nivel = "Ouro";
    } else if (saldo <= 90)
    {
        nivel = "Diamante";
    } else if (saldo <= 100)
    {
        nivel = "Lendário";
    } else
    {
        nivel = "Imortal";
    }

    console.log("O Herói tem saldo de %d está no nível de %s",saldo, nivel);
}


let vitorias = -1;
let derrotas = -1;

while (vitorias < 0)
{
    vitorias = parseInt(readline.question('Quantos vitórias teu personagem teve: '));
    if (vitorias < 0)
    {
        console.log("A quantidade de vitórias deve ser maior ou igual a zero!. \n Tente novamente!")
    }
}

while (derrotas < 0)
{
    derrotas = parseInt(readline.question('Quantos derrotas teu personagem teve: '));
    if (derrotas < 0)
    {
        console.log("A quantidade de derrotas deve ser maior ou igual a zero!. \n Tente novamente!")
    }
}


vitoriasrankeadas(vitorias, derrotas);