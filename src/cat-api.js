const API_KEY = 'live_4jedRlAWSRx3jFyMn5M3JGRQ8rFrFURgp3h7GLTPmakUBvLr0FdhVLk6nvXpBVyl';
const BREEDS_URL = 'https://api.thecatapi.com/v1/breeds';
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
}