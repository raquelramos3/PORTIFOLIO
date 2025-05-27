function somar(){
    let nome
    let nota1
    let nota2
    let nota3

     nome = window.prompt("Digite aqui seu nome: ");
     nota1 = Number(window.prompt(" Olá " + nome + "!" + "Digite aqui sua primeira nota:"));
     nota2 = Number(window.prompt("Digite aqui sua segunda nota:"));
     nota3 = Number(window.prompt("Digite aqui sua terceira nota:"));

    let resultado = nota1 + nota2 + nota3 /3
    
    if(resultado < 60) {
     alert(" Não passou! " + resultado + " é menor que 60! ");
 } else {
     alert(" Passou! " + resultado + " é maior ou igual a 60!");
 }
}


