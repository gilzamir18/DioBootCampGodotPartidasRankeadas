// Importando o módulo readline
const readline = require('readline-sync');

var heroiNome = "Jãozinho"
var heroiXPs = 0


heroiNome = readline.question('Qual o nome do teu personagem: ');
heroiXPs = -1;

while (heroiXPs < 0)
{
    heroiXPs = parseInt(readline.question('Quantos XPs teu personagem tem: '));
    if (heroiXPs < 0)
    {
        console.log("A quantidade de XPs deve ser maior ou igual a zero!. \n Tente novamente!")
    }
}

console.log("----------------------------------------\nNosso herói " + heroiNome + " é: ")
if (heroiXPs <= 1000)
{
    console.log("Ferro!");
}
else if (heroiXPs <= 2000)
{
    console.log("Bronze!");
} else if (heroiXPs <= 5000)
{
    console.log("Prata Ouro");
} else if (heroiXPs <= 8000)
{
    console.log("Platina Diamante");
}
else if (heroiXPs <= 9000)
{
    console.log("Ascendente");
} 
else if (heroiXPs <= 10000)
{
    console.log("Imortal");
}
else
{
    console.log("Radiante");
}
