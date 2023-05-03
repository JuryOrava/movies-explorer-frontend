class MoviesApi {
    constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
    }
    
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`); 
        }
        return res.json();
    }

    getMovies() {
        return fetch(`${this._baseUrl}`, { headers:  this._headers })
        .then(res => {
            return this._getResponseData(res)
        });
    }
}

export default MoviesApi