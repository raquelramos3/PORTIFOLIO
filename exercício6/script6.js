let cliques = 0;
let mostraHTML = document.getElementById("mostraHTML");

function contador() {

    cliques++;

    mostraHTML.innerHTML = `<p> Número e cliques: ${cliques}</p>`; 
    
}