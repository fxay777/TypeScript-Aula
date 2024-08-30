function multiplicacao (a: number, b: number): number{
    return a*b;
}
function saudacao(nome:string):string{
    return  "Olá" + nome;
}

const resultadoMultiplicacao = multiplicacao(5,3);
const mensagemSaudacao = saudacao ("Maria");

console.log (resultadoMultiplicacao);
console.log (mensagemSaudacao);
