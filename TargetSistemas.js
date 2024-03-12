/*

1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);



Ao final do processamento, qual será o valor da variável SOMA?

R: Conforme o código abaixo o valor da variável soma sera: 91

const indice = 13
let soma = 0 
let K = 0

while(K < indice)
{
K = K + 1;

soma = soma + K;
}

console.log(soma)

*/

/*

2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



function Fibonacci (n) {

    let soma = 0
    let ultimo = 1
    let penultimo = 0

    while (soma <= n) {

        if (soma === n) {

            return true

        }
    
        soma = ultimo + penultimo
        penultimo = ultimo
        ultimo = soma
    
    }

    return false

}

const numeroEscolhido = parseInt(prompt("Digite um número para verificar se está na sequência"))

if (Fibonacci(numeroEscolhido)) {

    alert(`O número "${numeroEscolhido}" faz parte da sequência Fibonacci`)

} else {

    alert(`O número "${numeroEscolhido}" não faz parte da sequência Fibonacci`)

} */

/*

3) Descubra a lógica e complete o próximo elemento:



a) 1, 3, 5, 7, ___ R: 9, a cada atualização é somado +2 ao ultimo numero

b) 2, 4, 8, 16, 32, 64, ____ R: 128, cada número é multiplicado por 2

c) 0, 1, 4, 9, 16, 25, 36, ____ R: 49, a cada número é adicionado um número ímpar, +1, +3, +5, +7, +9, +11, +13

d) 4, 16, 36, 64, ____ R: 100, a cada número é adicionado +8, começando por 12, 4+12, 16+20, 36+28, 64+36

e) 1, 1, 2, 3, 5, 8, ____ R: 13, o novo número recebe a soma dos 2 últimos, 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13

f) 2, 10, 12, 16, 17, 18, 19, ____ R: 200, números começam com a letra D

*/

/* 

4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?


R: Ligaria o 1º interruptor por um bom tempo para esquentar uma lâmpada, desligaria o 1º interruptor, ligaria o 2º interruptor e iria até um sala, se essa sala estivesse com a lâmpada quente e apagada seria a sala do 1º interruptor, se estivese com a luz acesa seria a sala do 2º interruptor e caso a lampada estivesse apagada e fria seria a sala do 3º interruptor

*/

/*

5) Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;

*/

/*

function inverter(stringOriginal) {

    let stringInvertida = ''

    for(i = stringOriginal.length - 1; i >= 0; i--) {
        stringInvertida += stringOriginal[i]
    }

    alert(`String original: "${stringOriginal}" <> String invertida: "${stringInvertida}"`)

}

inverter(prompt('Digite uma string qualquer'))

*/