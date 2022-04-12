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
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nesciunt aut est commodi! Eos consequuntur, est expedita quo quaerat omnis illo praesentium nemo tempore facere, voluptas perspiciatis exercitationem unde alias!',
        likes: 30,
        image: 'https://picsum.photos/200'
    },
    {
        id,
        fullName: 'Maria Rossi',
        photoUser: 'https://picsum.photos/200',
        date,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nesciunt aut est commodi! Eos consequuntur, est expedita quo quaerat omnis illo praesentium nemo tempore facere, voluptas perspiciatis exercitationem unde alias!',
        likes: 40
    },
    {
        id,
        fullName: 'Paolo Osella',
        photoUser: 'https://picsum.photos/200',
        date,
        text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis nesciunt aut est commodi! Eos consequuntur, est expedita quo quaerat omnis illo praesentium nemo tempore facere, voluptas perspiciatis exercitationem unde alias!',
        likes: 60,
        image: 'https://picsum.photos/200',
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
                <img src="${element.photoUser}" alt="">
                <div>
                    <div class="name">${element.fullName}</div>
                    <!-- /.name -->
                    <div class="date">${element.date}</div>
                    <!-- /.date -->
                </div>
            </div>
            <!-- /.headerPost -->
            <div class="mainPost">
                <p class="text">${element.text}</p>
                <!-- /.text -->
                <img src="${element.image}" alt="" class="postImage">
            </div>
            <!-- /.mainPost -->
            <div class="footerPost">
                <div class="btnLike">
                <i class="fa-solid fa-thumbs-up"></i>
                Mi piace
                </div>
                <!-- /.btnLike -->
                <div class="likeCounter">${element.likes}</div>
                <!-- /.likeCounter -->
            </div>
            <!-- /.footerPost -->
        </div>
        <!-- /.post -->`;

        containerPostElement.insertAdjacentHTML('beforeend', markupPost);
    })

}

generatePostCard(arrayPost);