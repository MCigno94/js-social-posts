/* 
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

#Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore
- foto autore
- data in formato americano (mm-gg-yyyy)
- testo del post
- immagine (non tutti i post devono avere una immagine)
- numero di likes.
*/

// Creiamo il nostro array di oggetti che rappresentano ciascun post

let id = 0;
let fullName = '';
let photoUser = '';
let date = getDataAmericanFormat();
let text = '';
let likes = 0;
let image = '';

let arrayPost = [{
    id,
    fullName,
    photoUser,
    date,
    text,
    likes,
    image
}]

console.log(arrayPost);

/** Funzione per creare la data di oggi in formato americano
 * 
 * @returns mm/gg/yyyy attuale
 */
function getDataAmericanFormat() {
    const date = new Date();
    let gg, mm, yyyy;
    gg = date.getDate() + '/';
    mm = date.getMonth() + 1 + '/';
    yyyy = date.getFullYear();
    return mm + gg + yyyy;
}