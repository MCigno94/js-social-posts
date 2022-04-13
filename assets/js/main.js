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
let date = getDataAmericanFormat();
let arrayPost = [{
        id,
        fullName: 'Mattia Cigno',
        photoUser: 'https://picsum.photos/200',
        date,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        likes: 30,
        image: '<img src="https://picsum.photos/200" alt="" class="postImage">'
    },
    {
        id,
        fullName: 'Maria Rossi',
        photoUser: 'https://picsum.photos/200',
        date,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        likes: 40,
        image: ''
    },
    {
        id,
        fullName: 'Paolo Osella',
        photoUser: 'https://picsum.photos/200',
        date,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
        likes: 60,
        image: '<img src="https://picsum.photos/200" alt="" class="postImage">'
    }
];

//console.log(arrayPost);

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

// genero le card con i relativi dati

function generatePostCard(array) {
    const containerPostElement = document.querySelector('.container');
    array.forEach((element, i) => {
        element.id = i;
        //console.log(element.id);
        let markupPost = `
        <div class="post">
            <div class="headerPost">
                <img src="${element.photoUser}" class="userImage" alt="">
                <div>
                    <div class="name"><strong>${element.fullName}</strong></div>
                    <!-- /.name -->
                    <div class="date">${element.date}</div>
                    <!-- /.date -->
                </div>
            </div>
            <!-- /.headerPost -->
            <div class="mainPost">
                <p class="text">${element.text}</p>
                <!-- /.text -->
                ${element.image}
            </div>
            <!-- /.mainPost -->
            <div class="footerPost">
                <div class="like">
                    <i class="fa-solid fa-thumbs-up"></i>
                    <input type="button" class="btnLike" value="Mi piace">
                </div>
                <!-- /.like -->
                <div class="likeCounter">Piace a <strong>${element.likes}</strong> persone</div>
                <!-- /.likeCounter -->
            </div>
            <!-- /.footerPost -->
        </div>
        <!-- /.post -->`;

        containerPostElement.insertAdjacentHTML('beforeend', markupPost);
    })

}

generatePostCard(arrayPost);

const btnLikes = document.querySelector('.btnLike');
btnLikes.addEventListener('click', function() {
    addLike();

})

/**
 * 
 */
function addLike() {
    console.log('ciao');
}