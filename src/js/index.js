import { data } from 'autoprefixer';
import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */
const storageKey = `cigarettesCount${new Date()
    .toISOString()
    .substring(0, 10)}`;
let cigarettesCount = localStorage.getItem(storageKey);

const cigarettesImgSrc = document.querySelector('.cigarettesArea__img--js').src;
const cigarettesPackageImgSrc = document.querySelector(
    '.cigarettesPackageArea__img--js'
).src;

const cigaretesCountParagraph = document.querySelector('.cigarettesCount--js');
cigaretesCountParagraph.innerHTML = cigarettesCount;

const cigarettesArea = document.querySelector('.cigarettesArea--js');
RefreshCigaretes();

const addButon = document.querySelector('.button-add--js');
addButon.addEventListener('click', (e) => {
    e.preventDefault();
    cigarettesCount++;
    localStorage.setItem(storageKey, cigarettesCount);
    cigaretesCountParagraph.innerHTML = cigarettesCount;
    RefreshCigaretes();
});

const deleteButton = document.querySelector('.button-remove--js');

deleteButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (cigarettesCount > 0) {
        cigarettesCount--;
        localStorage.setItem(storageKey, cigarettesCount);
        cigaretesCountParagraph.innerHTML = cigarettesCount;
        RefreshCigaretes();
    }
});

function RefreshCigaretes() {
    let cigarettesImg = '';
    const packageCigarettes = Math.floor(cigarettesCount / 20);
    const cigaretesRest = cigarettesCount % 20;
    for (let i = 0; i < packageCigarettes; i++) {
        cigarettesImg += `<img class="cigarettesPackageArea__img ${
            i == packageCigarettes - 1 && cigaretesRest == 0
                ? 'cigarettes-animation'
                : ''
        }" src="${cigarettesPackageImgSrc}"
    alt="Paczka papierosów"></img>`;
    }
    for (let i = 0; i < cigaretesRest; i++) {
        cigarettesImg += `<img class="cigarettesArea__img ${
            i == cigaretesRest - 1 ? 'cigarettes-animation' : ''
        }" src="${cigarettesImgSrc}" alt="Papieros">`;
    }

    cigarettesArea.innerHTML = cigarettesImg;
}
