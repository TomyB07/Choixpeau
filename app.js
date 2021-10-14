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
            let nameLength = elementCourant.length
            console.log(nameLength)

            if (elementCourant.length === 8) {
                let ajoutImage = '<img src="images/maxopus.png" alt="choixpo">';
                divChange.innerHTML = ajoutImage;
            } 
            
            else if (elementCourant[0] === "L" || elementCourant[0] === "l") {
                let ajoutImage = '<img src="images/lustrix.png" alt="choixpo">';
                document.querySelector('.speech').innerHTML = ajoutImage;
            } else if (elementCourant.charAt(elementCourant.length - 1) === "X" || elementCourant.charAt(elementCourant.length - 1) === "x") {
                let ajoutImage = '<img src="images/lustrix.png" alt="choixpo">';
                document.querySelector('.speech').innerHTML = ajoutImage;
            } 
            
            else if (Number.isInteger(elementCourant.length / 5)) {
                let ajoutImage = '<img src="images/anthorvus.png" alt="choixpo">';
                document.querySelector('.speech').innerHTML = ajoutImage;
            } else if (Number.isInteger(elementCourant.length / 3)) {
                let ajoutImage = '<img src="images/anthorvus.png" alt="choixpo">';
                document.querySelector('.speech').innerHTML = ajoutImage;
            } 
            
            else {
                let ajoutImage = '<img src="images/darioptera.png" alt="choixpo">';
                document.querySelector('.speech').innerHTML = ajoutImage;
            }
        } else {
            document.querySelector('.speech').innerHTML = 'Mmmh... Dans quelle maison vais-je te mettre ?';
        }


    }
}


// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);