// Chiedi all'utente Nome,Cognome e colore preferito per poi fornire una password

// chiedo all'utente il suo Nome
const nome = prompt("Scrivi il tuo Nome")

// chiedo all'utente il suo cognome
const cognome = prompt("Scrivi il tuo Cognome")

// chiedo all'utente il suo colore preferito
const colorePreferito = prompt("Scrivi il tuo colore preferito")

let password = "La password assegnata e':"
document.getElementById("generatore-password")
.innerHTML= `${nome}${cognome}${colorePreferito}21`