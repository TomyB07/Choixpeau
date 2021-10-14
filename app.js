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
        let form = document.querySelector('form');
        form.addEventListener("submit", app.handlerVerif);
    },

    handlerVerif: function (evt) {
        evt.preventDefault();
        let elementCourant = document.querySelector('.name').value;
        let divChange = document.querySelector('.speech');

        if (elementCourant != "") {
            
            if (elementCourant.length === 8) {
                let newImage = '<img src="images/maxopus.png" alt="choixpo">';
                divChange.innerHTML = newImage;
            } 
            
            else if (elementCourant[0] === "L" || elementCourant[0] === "l") {
                let newImage = '<img src="images/lustrix.png" alt="choixpo">';
                divChange.innerHTML = newImage;
            } else if (elementCourant.charAt(elementCourant.length - 1) === "X" || elementCourant.charAt(elementCourant.length - 1) === "x") {
                let newImage = '<img src="images/lustrix.png" alt="choixpo">';
                divChange.innerHTML = newImage;
            } 
            
            else if (Number.isInteger(elementCourant.length / 5)) {
                let newImage = '<img src="images/anthorvus.png" alt="choixpo">';
                divChange.innerHTML = newImage;
            } else if (Number.isInteger(elementCourant.length / 3)) {
                let newImage = '<img src="images/anthorvus.png" alt="choixpo">';
                divChange.innerHTML = newImage;
            } 
            
            else {
                let newImage = '<img src="images/darioptera.png" alt="choixpo">';
                divChange.innerHTML = newImage;
            }
        } else {
            divChange.innerHTML = 'Ça ne fonctionne qu\'avec un nom, pardi !';
        }
    }
}


// Quand la page est entièrement chargée, on exécute la méthode init située dans l'object app.
document.addEventListener('DOMContentLoaded', app.init);