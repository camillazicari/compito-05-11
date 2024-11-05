/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let numero1 = 20;
let numero2 = 14;

if (numero1>numero2) {
    console.log(numero1 + ' è maggiore di ' + numero2);
}
else {
console.log(numero2 + ' è maggiore di ' + numero1);
} */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA
let numeroIntero = 3;
if (numeroIntero != 5) {
    console.log('not equal')
} */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let numeroFornito = 9;
let Resto = numeroFornito % 5;
if (Resto === 0) {
    console.log('divisibile per 5');
} */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA
let numeroIntero1= 2;
let numeroIntero2 = 6;
if (numeroIntero1 === 8 || numeroIntero2 === 8) {
    console.log('uno dei numeri è 8');
}
else if (numeroIntero1 + numeroIntero2 === 8) {
    console.log('la somma è 8');
}
else if (numeroIntero2 - numeroIntero1 === 8 || numeroIntero1 - numeroIntero2 === 8) {
    console.log('la sottrazione è 8');
}
else {console.log('non si può ottenere 8');
} */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
const shipping = 10;
let totalShoppingCart = 110;
totalShoppingCart = totalShoppingCart - shipping;

if (totalShoppingCart > 50) {
console.log('la spedizione è gratuita! Il totale è: ' + totalShoppingCart);
}
else {
    console.log('la spedizione non è gratuita. Il totale è: ' + (totalShoppingCart + shipping));
} */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let prezzoScontato = totalShoppingCart - (totalShoppingCart * 0.2);

if (prezzoScontato > 50) {
    console.log('la spedizione è gratuita! Il totale è: ' + prezzoScontato);
    }
    else {
        console.log('la spedizione non è gratuita. Il totale è: ' + (prezzoScontato + shipping));
    } */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA
let variabile1 = 200;
let variabile2 = 20;
let variabile3 = 1400;
 if (variabile1 > variabile2 && variabile1 > variabile3) {
    if (variabile2 > variabile3) {
        console.log(variabile1 + '>' + variabile2 +'>' + variabile3);
    }
    else {
        console.log(variabile1 + '>' + variabile3 + '>' + variabile2);
    }
 }
 else if (variabile2 > variabile1 && variabile2 > variabile3) {
    if (variabile1 > variabile3) {
        console.log(variabile2 + '>' + variabile1 + '>' + variabile3);
    }
    else {
        console.log(variabile2 + '>' + variabile3 + '>' + variabile1);
    }
 }
 else if (variabile3 > variabile1 && variabile3 > variabile2) {
    if (variabile1 > variabile2) {
        console.log(variabile3 + '>' + variabile1 + '>' + variabile2);
    }
    else {
        console.log(variabile3 + '>' + variabile2 + '>' + variabile1);
    }
 } */


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA 
let valoreX = '2'
if (typeof(valoreX) != 'number' ) {
    console.log('non è un numero');
} 
else {
    console.log('è un numero');
} */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number = 18;
let resto = number % 2;

if (resto === 0 ) {
    console.log('il numero è pari');
}
else {console.log('il numero è dispari');
    
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".

const me = {
    name: 'John',
    lastName: 'Doe',
    skills: ['javascript', 'html', 'css'],
  } */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 12
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 13
    Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 14
    Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */
  
  /* ESERCIZIO 15
    Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
  */
  
  /* SCRIVI QUI LA TUA RISPOSTA */