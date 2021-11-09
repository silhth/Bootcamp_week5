ATTENZIONE:
Create un nuova pagina html, un nuovo file di stile e uno script js.
Non usare lo stesso della lezione.

1. Riprendendo la pagina web creata a lezione, voglio che il bottone che `rinomina l'elemento H1`
   aggiunga un testo inserito dall'utente, tramite prompt.

   Opzionale: create un elemento `<input>` e fate aggiungere il testo all'utente non più tramite
   il prompt ma tramite quel campo di `input`.
   TIP: anche `<input>` è un elemento, e presenta delle chiavi...
   tra queste ne trovate una anche per il testo in esso inserito...

2. Creare un elemento unordered list `<ul>` e un `<button>` all'interno del vostro HTML.
   Il click sul button andrà a creare un figlio `<li>` all'interno del padre `<ul>`.
   Non importa la quantità di `li` nè il valore che essi contengono. Ne basta anche uno.

AVANZATO:
Sulla base dell'esercizio 2. andate a gestire anche il contenuto (si intende il testo) del `li` e fate si
che l'utente possa inserirne tutti quelli che vuole. Il funzionamento dovrà simulare in tutto quello di
un dizionario/rubrica gestendo il flusso con i nuovi concetti di Parent / Children (padre / figlio)
visti oggi.


------------------------------------------

sulla base dell'esercizio della modale, il bottone che prima non faceva nulla
adesso deve ripulire tutto quello che sta sotto alla modale, così da lasciare
uno spazio bianco.
La modale di prima si chiude.

             Nella schermata bianca, dopo 5 secondi comparirà un'altra modale, che avvisa
             l'utente di non aver accettato la politica per accedere al sito e che (in via del tutto scherzosa)
             una equipe di scimmie assassine usciranno fuori dal monitor.

             Dopo 5 secondi dall'avviso, ogni singolo nome delle scimmie (e i relativi AKA), comparirà a centro dello schermo.
             Ad intervalli, il nome cambia. In modo da far spaventare ancora di più l'utente.

             Requisiti:
                - qualunque listener o timeout deve essere ripulito, il core (browser) di JS non deve essere
                  compromesso in alcun modo. (tutto deve scorrere fluidissimo, come sempre!)

                - (mi sto girando a terra dalle risate... buon divertimento, :lol)

```javascript
// La lista delle scimmie assassine:
const monkeysEquipe = [
  { name: "John", aka: "lo spaventa passeri", surname: "Ross" },
  { name: "Ector", aka: "il corsaro", surname: "Mauss" },
  { name: "Franco", aka: "ciccio bello", surname: "La croix" },
  { name: "Mika", aka: "la regina del male", surname: "Peretti" },
  { name: "Lucy", aka: "il male", surname: "sconosciuto" },
];
```