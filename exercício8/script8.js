let mostraHTML = document.getElementById("mostraHTML");

let numero 

let numeroale

numeroale = parseInt(Math.random() * 101);

function aleatorio () {
    numero = Number(window.prompt("Digite aqui o seu palpite: "));

    if(numero == numeroale) {
        mostraHTML.innerHTML += `<p>Vocẽ falou ${numero}, você acertou!</p>`;;
    } 

    if(numero < numeroale) {
        mostraHTML.innerHTML += `<p>Você falou ${numero}, meu número é MAIOR!</p>`;
    }

    if(numero > numeroale) {
        mostraHTML.innerHTML += `<p>Você falou ${numero}, meu número é MENOR!</p>`;
    }

}