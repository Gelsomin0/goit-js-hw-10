import { CatApiService } from "./cat-api";
import Notiflix from 'notiflix';

const catApiService = new CatApiService();
const ell = {
    breedSelect: document.querySelector('.breed-select'),
    catInfo: document.querySelector('.cat-info'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
}

getCatBreeds();
ell.breedSelect.addEventListener('change', getCatInfo);


function getCatBreeds() {
    ell.loader.classList.add('js-visible');

    catApiService.fetchBreeds().then((res) => {
        setCatNamesList(res);
    }).catch((err) => {
        ell.loader.classList.remove('js-visible');
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
    })
}

function setCatNamesList(list) {
    const catNamesList = list.map((cat) => {
        const { id, name } = cat;

        return `
            <option value='${id}'>${name}</option>
        `
    }).join('');

    ell.breedSelect.insertAdjacentHTML('beforeend', catNamesList);
    ell.breedSelect.classList.add('js-visible');
    ell.loader.classList.remove('js-visible');
}

function getCatInfo(e) {
    ell.loader.classList.add('js-visible');
    ell.catInfo.classList.remove('js-visible');
    ell.error.classList.remove('js-visible');

    catApiService.fetchCatByBreed(e.currentTarget.value).then((res) => {
        const { breeds, url } = res;

        const catInfo =  breeds.map(({ name, description, temperament }) => {
            return `
            <div>
                <img class='cat-image' src='${url}'>
            </div>
            <div>
                <h2>${name}</h2>
                <p>${description}</p>
                <p>
                    <span class='evidance'>Temperament: </span> ${temperament}
                </p>
            </div>
            `
        }).join('');

        ell.catInfo.innerHTML = catInfo;
        ell.catInfo.classList.add('js-visible');
        ell.loader.classList.remove('js-visible');
    }).catch((err) => {
        console.log('Opps! Some error!', err);

        ell.loader.classList.remove('js-visible');
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
}
