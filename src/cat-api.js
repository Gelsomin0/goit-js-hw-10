const API_KEY = 'live_4jedRlAWSRx3jFyMn5M3JGRQ8rFrFURgp3h7GLTPmakUBvLr0FdhVLk6nvXpBVyl';
const BREEDS_URL = 'https://api.thecatapi.com/v1/breeds';
const BASE_ID_URL = 'https://api.thecatapi.com/v1/images/search';
const options = {
    headers: {
        'x-api-key': API_KEY,
    }
}

export class CatApiService {
    constructor() { }
    
    fetchBreeds() {
        return fetch(BREEDS_URL, options)
            .then((res) => {
                return res.json();
            })
    }

    fetchCatByBreed(breedId) {
        return fetch(`${BASE_ID_URL}?breed_ids=${breedId}`, options).then((res) => {
            return res.json();
        }).then((res) => {
            return res[0];
        })
    }
}