var percorso = prompt('Immettere i km da percorrere');

var eta = prompt('Immettere età del viaggiatore');

var costoKm = 0.21;

//faccio calcolo del prezzo
var prezzoBiglietto = percorso * costoKm;
//console.log(prezzoBiglietto);

//faccio il calcolo per lo sconto
var scontoMinorenni = prezzoBiglietto * 20 / 100;
console.log(scontoMinorenni);
var scontoOver65 = prezzoBiglietto * 40 / 100;
console.log(scontoOver65);

if (eta < 18) {
    document.getElementById('display').innerHTML = 'Il prezzo del biglietto è ' + (prezzoBiglietto - scontoMinorenni);
}else if (eta >= 65) {
    document.getElementById('display').innerHTML = 'Il prezzo del biglietto è ' + (prezzoBiglietto - scontoOver65);
}else {
    document.getElementById('display').innerHTML = 'Il prezzo del biglietto è ' + (prezzoBiglietto);
}
