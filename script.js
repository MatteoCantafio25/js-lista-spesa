//---------------------------------
// MI ASSICURO CHE IL FOGLIO JS COMUNICHI CON IL FOGLIO HTML

console.log("JS OK");


//---------------------------------
// RECUPERO GLI ELEMENTI DALLA PAGINA

const containerList = document.getElementById("container-list");

//---------------------------------
// CREO UNA COSTANTE CON L'ARRAY DI PARTENZA

const list = ["farina", "pomodori", "mele", "acqua", "patatine"];

//---------------------------------
// CREO UN IL TAG DI APERTURA DELL'UL PER AVERE IN PAGINA POI UNA LISTA
let listItems = "<ul>";


//--------------
// DICHIARO LA I
i = 0
while (i < list.length) {
    // MONTO IL MESSAGGIO CON L'UL
    listItems += `<li>${list[i]}</li>`;

    // INCREMENTIAMO IL CONTATORE
    i++
}


//--------------
// TODO ESEGUO LA STESSA COSA CON UN CICLO FOR
/*
for (let i = 0; i < list.length; i++) {
    listItems += `<li>${list[i]}</li>`;
}
*/

//---------------------------------
// CHIUDO L'UL

listItems += "</ul>";


//---------------------------------
// STAMPO IN PAGINA

containerList.innerHTML += listItems;

