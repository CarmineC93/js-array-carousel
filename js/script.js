
//inseriamo le immagini dello slider nella pagina in modo dinamico
    //creiamo un array con il nome delle immagini come elementi/stringhe
    const sliderImages = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

    //estraiamo e salviamo in una variabile l'elemento della pagina dove inseriremo questi elementi
    const itemsContainer = document.querySelector(".items-container")
    //**BONUS 2:** usiamo lo stesso array per aggiungere elementi alla thumbnail laterale
    const preview = document.querySelector(".preview")


    //inseriamo le immagini-elementi nella pagina attraverso un loop e un template literal
    for(let i = 0; i< sliderImages.length; i++){
        const picture = sliderImages[i];
        //**BONUS 2:**uso lo stesso ciclo per le miniature
        const thumbPic = sliderImages[i];

        const box =`<div class="item">
                        <img src="${picture}" alt="landscape">
                    </div>`;

        const thumbBox =`<img class=thumb src="${thumbPic}" alt="landscape">`;

        itemsContainer.innerHTML += box;
        preview.innerHTML += thumbBox;
    }

    // OPPURE METODO ALTERNATIVO PER inserire le immagini-elementi nella pagina attraverso un loop e un template literal
    /* 
    let box = "";
    let thumbBox = "";
    for(let i = 0; i< sliderImages.length; i++){
        const picture = sliderImages[i];
        const thumbPic = sliderImages[i];

        box +=`<div class="item">    //con += si reitera creando tutti i div nell'ultima iterazione e fuori dal ciclo la spostiamo nel container una sola volta
                        <img src="${picture}" alt="landscape">
                    </div>`;
       thumbBox +=`<img class=thumb src="${thumbPic}" alt="landscape">`;
    }
    itemsContainer.innerHTML = box;
    preview.innerHTML += thumbBox;
    */

/*essendo tutti gli elementi nasconti da display:none; in CSS, creo un'altra' classe in CSS che abbia display block, in modo 
da rendere visibile l'elemento-immagine che ha quella classe*/
    //estraiamo più elementi contemporaneamente dalla pagina e li salviamo in una variabile come fosse un array(HTMLCollection si comporta in modo simile)
    const items = document.getElementsByClassName("item");
    // **BONUS 2:** estraiamo più elementi 
    const thumbs = document.getElementsByClassName("thumb");

    //creiamo una variabile che tiene conto dell'indice attuale, quindi inizialmente di valore 0
    let position = 0;
    //assegnamo al primo elemento-immagine (di indice 0) la classe che lo renderà visibile
    items[position].classList.add("active");
    // **BONUS 2:**
    thumbs[position].classList.add("thumb-active");

    
//assegnamo all'evento click delle frecce lo spostamento della classe active da un elemento-immagine all'altro
    //salviamo gli elementi freccia in variabili
    const prevArrw = document.querySelector(".prev")
    const nextArrw = document.querySelector(".next")

    //al caricamento della pagina la freccia PREV non serve, non potendo andare oltre la prima foto
    //prevArrw.classList.add("hidden");

    //Click avanti NEXT
    //assegnamo all'elemento freccia la funzione che si attiverà ad un evento(click)
    nextArrw.addEventListener("click", function(){
        //creiamo un controllo che impedisca di reiterare la funzione quando si raggiunga l'indice oltre il quale l'array finisce
        if(position < items.length -1){ //-1 perchè l'incremento va fermato al penultimo elemento, altrimenti ultimo+1 = sforiamo l'array
            //al click rimuoviamo la classe active dall'attuale elemento visibile
            items[position].classList.remove("active"); //essendo comandi comuni sia a if che a else avremmo potuto metterli anche fuori dalla condizione
             // **BONUS 2:**
            thumbs[position].classList.remove("thumb-active"); 

            //incrementiamo di 1 l'indice per passare al successivo elemento-immagine
            position++;
            //aggiungiamo la classe active al nuovo attuale elemento (con indice maggiorato di 1)
            items[position].classList.add("active"); //essendo comandi comuni sia a if che a else avremmo potuto metterli anche fuori dalla condizione
             // **BONUS 2:**
            thumbs[position].classList.add("thumb-active");

            /*
            //al click in avanti riappare la freccia PREV, che al caricamento della pagina giustamente è nascosta. 
            prevArrw.classList.remove("hidden");

            //quando arrivo all'ultimo elemento la freccia NEXT viene nascosta, riapparirà quando clicco PREV
            if(position === (items.length -1)){
               nextArrw.classList.add("hidden");
            } 
            */

        } //Altrimenti l'array riparte dalla prima immagine
        else { 
            items[position].classList.remove("active");
             // **BONUS 2:**
            thumbs[position].classList.remove("thumb-active")

            position = 0;

            items[position].classList.add("active");
             // **BONUS 2:**
            thumbs[position].classList.add("thumb-active")
        }
    })

    //Click indietro PREV
    prevArrw.addEventListener("click", function(){
        if(position > 0){ //non >= perchè il decremento va fermato prima dello zero altrimenti con 0-1 sforiamo l'array.
            items[position].classList.remove("active");
             // **BONUS 2:**
            thumbs[position].classList.remove("thumb-active");

            position--;
            
            items[position].classList.add("active");
            // **BONUS 2:**
            thumbs[position].classList.add("thumb-active");

            /*
            //riappare la freccia NEXT quando clicco PREV non essendo più sull'ultimo elemento
            nextArrw.classList.remove("hidden");
            //al click se l'attuale posizione è 0(cioè primo elemento-immagine) non ha senso la freccia indietro e la nascondiamo
            if(position === 0){
                prevArrw.classList.add("hidden");
            }
            */

        } //altrimenti l'array riparte dall'ultima immagine
            else {
                items[position].classList.remove("active");
                 // **BONUS 2:**
                thumbs[position].classList.remove("thumb-active")

                position = items.length-1;
                
                items[position].classList.add("active");
                 // **BONUS 2:**
                thumbs[position].classList.add("thumb-active")
            }
    })

//spostiamo l'immagine al click sulla miniatura
//creo un ciclo all'interno del quale si ridefinisca la nuova attuale posizione per un nuovo evento: il click sulle miniature
for(let i=0; i < thumbs.length; i++){
    const clickedThumb = thumbs[i];

    clickedThumb.addEventListener("click", function(){
        items[position].classList.remove("active");
        thumbs[position].classList.remove("thumb-active");
   
        //aggiorno attuale posizione
        position = i;

        items[position].classList.add("active");
        thumbs[position].classList.add("thumb-active")
    })
}
