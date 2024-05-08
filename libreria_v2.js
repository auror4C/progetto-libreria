const prompt=require("prompt-sync")();

//inserimento dei libri nella libreria da parte dell'utente
let a=parseInt(prompt("Inserire il numero di libri da inserire: "));

    let l=[];
    for(let i=0; i<a; i++)
    {
        let n=i+1;    
        const libro=
        {
            autore:prompt("Inserisci l'autore del libro "+n+": "),
            genere:prompt("Inserisci il genere del libro "+n+": "),
            titolo:prompt("Inserisci il titolo del libro "+n+": "),
            pagine:parseInt(prompt("Inserisci le pagine del libro "+n+": ")),
            isbn:parseInt(prompt("Inserisci l'ISBN: ")),
            prestato: false
        }
        while(libro.pagine<=0)
            {
                libro.pagine=parseInt(prompt("Le pagine del libro "+n+" devono essere maggiori di 0: "));
            }
        l.push(libro);
        console.log("Il libro "+n+" è stato inserito !");
    }

//richiesta di modifica di un libro
let risposta1=prompt("Vuoi modificare le informazioni di qualche libro? (Si/No): ");
while(risposta1.toLowerCase() !== "si" && risposta1.toLowerCase() !== "no")
{
    risposta1=prompt("Vuoi modificare le informazioni di qualche libro? (Si/No): ");
}
if(risposta1 === "no")
{
    console.log("Lista dei libri disponibili: ");
    console.log(l);
}

do
{
    if(risposta1.toLowerCase() === "si")
    {
        let risposta2=parseInt(prompt("Di quale libro vuoi modificare le informazioni? (Inserisci un numero valido compreso tra 1 e " + a + "): "));
        while (risposta2 <= 0 || risposta2 > a)
        {
            risposta2 = parseInt(prompt("Inserisci un numero valido compreso tra 1 e " + a + ": "));
        }
        
        let risposta4;
        do
        {
            let risposta3=prompt("Quale delle seguenti informazioni vuoi modificare? (autore, genere, titolo, pagine): ");
            while(risposta3.toLowerCase() !== "autore" && risposta3.toLowerCase() !== "genere" && risposta3.toLowerCase() !== "titolo" && risposta3.toLowerCase() !== "pagine" )
            {
                risposta3=prompt("Quale delle seguenti informazioni vuoi modificare? (autore, genere, titolo, pagine): ");
            }

            if(risposta3.toLowerCase() === "autore")
            {
                l[risposta2-1].autore=prompt("Inserisci il nuovo autore: ");
            }
            if(risposta3.toLowerCase() === "genere")
            {
                l[risposta2-1].genere=prompt("Inserisci il nuovo genere: ");
            }
            if(risposta3.toLowerCase() === "titolo")
            {
                l[risposta2-1].titolo=prompt("Inserisci il nuovo titolo: ");
            }
            if(risposta3.toLowerCase() === "pagine")
            {
                l[risposta2-1].pagine=parseInt(prompt("Inserisci il nuovo pagine: "));
            }

            risposta4=prompt("Vuoi modificare altro di questo libro? (Si/No): ")
            while(risposta4.toLowerCase() !== "si" && risposta4.toLowerCase() !== "no")
            {
                risposta4=prompt("Vuoi modificare altro di questo libro? (Si/No): ");
            }
        }
        while(risposta4.toLowerCase() === "si")

        risposta1=prompt("Vuoi modificare un altro libro? (Si/No): ");
        while(risposta1.toLowerCase() !== "si" && risposta1.toLowerCase() !== "no")
        {
            risposta1=prompt("Vuoi modificare un altro libro? (Si/No): ");
        }
        console.log("Tutte le modifiche sono state salvate !");
    }
}
while(risposta1.toLowerCase() === "si")

//richiesta di cercare un libro
let richiesta=prompt("Vuoi cercare un libro? (Si/No): ");
while(richiesta.toLowerCase() !== "si" && richiesta.toLowerCase() !== "no")
{
    richiesta=prompt("Vuoi cercare un libro? (Si/No): ");
}
if(richiesta==="no")
{
   console.log("Libri disponibili: ");
   console.log(l);
}

if(richiesta==="si")
{
    let termineRicerca = prompt("Inserisci il termine di ricerca (titolo, autore, genere): ").toLowerCase();
    while(termineRicerca !== "titolo" && termineRicerca !== "autore" && termineRicerca !== "genere")
    {
        termineRicerca=prompt("Inserisci il termine di ricerca (titolo, autore, genere): ").toLowerCase();
    }

    const valoreRicerca = prompt("Inserisci il valore da cercare: ").toLowerCase();

    const risultati = l.filter(libro => {
        if (termineRicerca === "autore") {
            return libro.autore.toLowerCase().includes(valoreRicerca);
        } else if (termineRicerca === "genere") {
            return libro.genere.toLowerCase().includes(valoreRicerca);
        } else if (termineRicerca === "titolo") {
            return libro.titolo.toLowerCase().includes(valoreRicerca);
        } 
    });

    console.log("Risultati della ricerca:");
    console.log(risultati);
}

//richiesta prestito libri
let prestito=prompt("Vuoi prendere in prestito un libro? (Si/No): ");
while(prestito.toLowerCase() !== "si" && prestito.toLowerCase() !== "no")
    {
        prestito=prompt("Vuoi prendere in prestito un libro? (Si/No): ");
    }

if(prestito === "no")
{
  console.log("Arrivederci !");
}

if(prestito === "si")
{
let u=parseInt(prompt("Quanti utenti vogliono prendere in prestito un libro? "));
while(u<=0)
{
    u=parseInt(prompt("Quanti utenti vogliono prendere in prestito un libro? "));
}
let utenti=[];

//gesione della registrazione utenti 
for (let i = 0; i < u; i++)
{
    let n = i + 1;

    let nome = prompt("L'utente " + n + " inserisce il proprio nome: ");
    let cognome = prompt(nome + " inserisce il proprio cognome: ");

    let utentePresente = utenti.find(utente => utente.nome === nome && utente.cognome === cognome);
    while (utentePresente)
    {
        console.log("L'utente " + nome + " " + cognome + " è già registrato.");
        nome = prompt("L'utente " + n + " reinserisce il proprio nome: ");
        cognome = prompt(nome + " reinserisce il proprio cognome: ");
        utentePresente = utenti.find(utente => utente.nome === nome && utente.cognome === cognome);
    }
    const nuovoUtente =
    {
        nome: nome,
        cognome: cognome,
        durataPrestito: parseInt(prompt("Per quanti giorni " + nome + " " + cognome + " desidera prolungare il prestito?: ")),
        libriInPrestito:[]
    };
    while (nuovoUtente.durataPrestito <= 0)
    {
        nuovoUtente.durataPrestito = parseInt(prompt("Per quanti giorni " + nome + " " + cognome + " desidera prolungare il prestito?: "));
    }
    utenti.push(nuovoUtente);
    console.log(nuovoUtente.nome + " " + nuovoUtente.cognome + " è stato salvato !");
    
    let libroDaPrestare;
    let libro=null;
    
    while (!libro ||(libro && libro.prestato))
    {
        libroDaPrestare = prompt("Inserisci il titolo del libro da prendere in prestito: ").toLowerCase();
        
        if(!libroDaPrestare)
        {
            console.log ("Il titolo del libro non risulta nel nostro archivio");
        }
        else
        {
            libro = l.find(libro => libro.titolo.toLowerCase() === libroDaPrestare);
        }
        if (!libro)
        {
            console.log("Libro non disponibile.");
        }
        if(libro && libro.prestato)
        {
            console.log("Il libro è già stato prestato. Sarà disponibile fra qualche giorno.");
        }
       
    }
    

    libro.prestato = true;
    if (!utenti[utenti.length - 1].libriInPrestito)
    {
        utenti[utenti.length - 1].libriInPrestito = [];
    }
    utenti[utenti.length - 1].libriInPrestito.push(libro);
    console.log("Libro prestato con successo a " + nuovoUtente.nome + " " + nuovoUtente.cognome + ".");
}
}