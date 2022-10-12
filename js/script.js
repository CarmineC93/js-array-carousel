
//inseriamo le immagini dello slider nella pagina in modo dinamico
    //creiamo un array con il nome delle immagini come elementi/stringhe
    const sliderImages = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

    //estraiamo e salviamo in una variabile l'elemento della pagina dove inseriremo questi elementi
    const itemsContainer = document.querySelector(".items-container")

    //inseriamo le immagini-elementi nella pagina attraverso un loop e un template literal
    for(let i = 0; i< sliderImages.length; i++){
        const picture = sliderImages[i];
        const box =`<div class="item">
                        <img src="${picture}" alt="landscape">
                    </div>`;
    }



// **MILESTONE 2**
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array 
//fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente 
//attraverso JavaScript.

// **MILESTONE 3**
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata 
//al posto della precedente.

// **BONUS 1:**
// Aggiungere il **ciclo infinito** del carosello. Ovvero se è attiva la prima immagine e l'utente 
//clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

// **BONUS 2:**
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, 
//come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, 
//tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
// Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

// **Prima di partire a scrivere codice:**
// Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, 
//cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS,
// se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. 

//Non dedichiamo però al ripasso più di una **mezz'ora**, così da non perdere di vista il focus dell'esercizio.
// **Consigli del giorno:**
// 1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
// 2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// 3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"
