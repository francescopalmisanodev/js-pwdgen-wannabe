let nome = prompt("inserisci il tuo nome:");
let cognome = prompt("inserisci il tuo cognome:");
let colore = prompt("inserisci il tuo colore preferito:");
let numero = parseInt (prompt("inserisci il tuo numero preferito:"));
// document.getElementById ("password").innerHTML= nome + cognome + colore + numero;
document.getElementById ("password").innerHTML=`la password è: ${nome}${cognome}${colore}${numero}`;