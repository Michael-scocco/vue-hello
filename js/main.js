// vue-hello
// Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.




// Descrizione: Stampare a schermo un messaggio 
// all’interno di un h1, utilizzando i data.

let screen = new Vue(
    {
     el: '#app',
     data:{
         title: 'Learn vueJS',
         vueTest: './img/vueTest.png',
         colorTitle: 'black',
     },
     methods:{
         changeColor(){
            if (this.colorTitle === 'black') {
                this.colorTitle = 'green';
            } else{
                this.colorTitle = 'black';
            }
         }
     }

    });

// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.
