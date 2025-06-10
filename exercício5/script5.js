let num1
let num2

num1 = Number(window.prompt("Digite aqui o primeiro número:"));
num2 = Number(window.prompt("Digite o segundo número:"));

if(num1 > num2) {
    alert(" O número " + num1 + " é maior que " + num2);
} else {
    alert(" O número " + num2 + " é maior que " + num1);
}