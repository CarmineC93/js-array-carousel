
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
        itemsContainer.innerHTML += box;
    }

/*essendo tutti gli elementi nasconti da display:none; in CSS, creo un'altra' classe in CSS che abbia display block, in modo 
da rendere visibile l'elemento-immagine che ha quella classe*/
    //estraiamo più elementi contemporaneamente dalla pagina e li salviamo in una variabile come fosse un array(HTMLCollection si comporta in modo simile)
    const items = document.getElementsByClassName("item");
    //creiamo una variabile che tiene conto dell'indice attuale, quindi inizialmente di valore 0
    let position = 0;
    //assegnamo al primo elemento-immagine (di indice 0) la classe che lo renderà visibile
    items[position].classList.add("active");


//assegnamo all'evento click delle frecce lo spostamento della classe active da un elemento-immagine all'altro
    //Click avanti NEXT
    //salviamo l'elemento freccia in una variabile
    const nextArrw = document.querySelector(".next")
    //assegnamo all'elemento freccia la funzione che si attiverà ad un evento(click)
    nextArrw.addEventListener("click", function(){
        //creiamo un controllo che impedisca di reiterare la funzione quando si raggiunga l'indice oltre il quale l'array finisce
        if(position < items.length -1){ //-1 perchè l'incremento va fermato al penultimo elemento, altrimenti ultimo+1 sforiamo l'array
            //al click rimuoviamo la classe active dall'attuale elemento visibile
            items[position].classList.remove("active");
            //incrementiamo di 1 l'indice per passare al successivo elemento-immagine
            position++;
            //aggiungiamo la classe active al nuovo attuale elemento (con indice maggiorato di 1)
            items[position].classList.add("active");
        }
    })

    //Click indietro PREV
    //salviamo l'elemento freccia in una variabile
    const prevArrw = document.querySelector(".prev")

    prevArrw.addEventListener("click", function(){
        if(position > 0){ //non >= perchè il decremento va fermato prima dello zero altrimenti con 0-1 sforiamo l'array.
            items[position].classList.remove("active");
            position--;
            items[position].classList.add("active");
        }
    })



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
