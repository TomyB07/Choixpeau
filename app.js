// Notre variable qui contient le "module" app (un objet)
let app = {
    // Tableau contenant le nom des 4 maisons
    houses: [
        'anthorvus',
        'darioptera',
        'lustrix',
        'maxopus'
    ],
    // Méthode appelée au chargement de la page


    init: function () {
        console.log('init');
        let form = document.querySelector('form');
        form.addEventListener("submit", app.handlerVerif);

    },

    handlerVerif: function (evt) {
        evt.preventDefault();
        let elementCourant = document.querySelector('.name').value;
        let divChange = document.querySelector('.speech');

        if (elementCourant != "") {
            console.log(elementCourant);
            let randomNumber = (Math.random());
            console.log(randomNumber);
            if (randomNumber < 0.25) {
                let ajoutImage = '<img src="images/anthorvus.png" alt="choixpo">';
                document.querySelector('.speech').innerHTML = ajoutImage;
            }
            else if (randomNumber < 0.5) {
                let ajoutImage = '<img src="images/darioptera.png" alt="choixpo">';
                document.querySelector('.speech').innerHTML = ajoutImage;
            }
            else if (randomNumber < 0.75) {
                let ajoutImage = '<img src="images/lustrix.png" alt="choixpo">';
                document.querySelector('.speech').innerHTML = ajoutImage;
            }else if (randomNumber < 1) {
                let ajoutImage = '<img src="images/maxopus.png" alt="choixpo">';
                document.querySelector('.speech').innerHTML = ajoutImage;
            }

        }


    }
}


// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);