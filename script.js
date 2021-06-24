var myObject = new Vue({ //creazione dell'oggetto Vue
    el: '#app', //Nome id
    data: {
        message: 'Hello World!', //stampa hello world su un h1 {{message}}
        text: '', //prende simultaneo da un input:text e lo carica nel h1 {{text}}
        img:'https://via.placeholder.com/150' //caricamento link SRC:img
    } //dove e cosa Stampare
})