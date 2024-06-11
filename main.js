// Pedro Victor Lopes de Souza - 23214290046

function multNormal (n, n1) {
    return n * n1;
}
let a = 14;
let b = 3;
console.log(multNormal(a, b));

function livroAutor (nome, titulo) {
    return `Esse eh ${titulo}, do autor ${nome}. \n`
}
let autor = 'Stephen king';
let livro = 'It';
console.log(livroAutor(autor, livro));

function ola() {
    return `Olá! \n`
}
console.log(ola());

const main = require('prompt-sync')({signint: true});
function idade(age) {
    return `Sua idade eh ${age}. \n`;
}
let pergunta = parseInt(main('Digite sua idade: '));
console.log(idade(pergunta));

function impar() {
    let resultado = ''
    for (let n = 0; n < 11; n++) {
        if (n % 2 == 1) {
            resultado += `O numero ${n} eh impar. \n`
        } else {
            resultado += `O numero ${n} eh par. \n`
        }
    }
    return resultado;
}
console.log(impar());

let pares = [];
function par() {
    for (i = 0; i <= 20; i++) {
        while (i < 21) {
        if (i % 2 == 0) {
            pares.push(i);
        }
        break;
    }
    }
    return pares;
}
console.log(par());

function dez() {
    return pares.includes(10);
}
console.log(dez());

function bebida() {
    for(let j = 16; j <= 20; j++) {
        switch (j) {
            case 16:
                console.log `Não pode beber`
                break;
            case 17:
                console.log `Não pode beber`
                break;
            case 18:
                console.log `Não pode beber`
                break;
            case 19:
                console.log `Pode beber`
                break;
            case 20:
                console.log `Pode beber`
                break;
        }
    }
}
bebida();