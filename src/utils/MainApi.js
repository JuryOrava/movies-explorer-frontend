class MainApi {
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

    getInitialMovies() {
        const token = localStorage.getItem('token');
        return fetch(`${this._baseUrl}/movies`, { headers:  {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        } })
        .then(res => {
            return this._getResponseData(res)
         });
    }

    saveMovie = (items) => {
        const token = localStorage.getItem('token');
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers:  {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country: items.country,
                director: items.director,
                duration: items.duration,
                year: items.year,
                description: items.description,
                image: 'https://api.nomoreparties.co/' + items.image.url,
                trailerLink: items.trailerLink,
                nameRU: items.nameRU,
                nameEN: items.nameEN,
                thumbnail: 'https://api.nomoreparties.co/' + items.image.formats.thumbnail.url,
                movieId: items.id,
            })
        })
        .then(res => {
            return this._getResponseData(res)
         });
    }

    deleteSaveMovie(id) {
        const token = localStorage.getItem('token');
        return fetch(`${this._baseUrl}/movies/${id}`, {
            method: 'DELETE',
            headers:  {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            return this._getResponseData(res)
         });
    }

    getUserInfo() {
        const token = localStorage.getItem('token');
        return fetch(`${this._baseUrl}/users/me`, { headers:  {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        } })
        .then(res => {
            return this._getResponseData(res)
         });
    }

    editUserInfo(name, email) {
        const token = localStorage.getItem('token');
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers:  {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: name,
              email: email
            })
        })
        .then(res => {
            return this._getResponseData(res)
         });
    }
    
    register = (password, email, name) => {
        return fetch(`${this._baseUrl}/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({password, email, name})
        })
        .then((res) => {
          return this._getResponseData(res)
        })
      };
      
    authorize = (password, email) => {
        return fetch(`${this._baseUrl}/signin`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({password, email})
        })
        .then((res) => {
          return this._getResponseData(res)
        })
      };
      
    checkToken = (token) => {
        return fetch(`${this._baseUrl}/users/me`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        })
        .then((res) => {
          return this._getResponseData(res)
        })
      }
}

export default MainApi