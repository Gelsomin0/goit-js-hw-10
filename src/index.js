import { CatApiService } from "./cat-api"

const catApiService = new CatApiService();
const ell = {
    breedSelect: document.querySelector('.breed-select'),
}

getCatBreeds();


function getCatBreeds() {
    catApiService.fetchBreeds().then((res) => {
        setCatNamesList(res);
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
}