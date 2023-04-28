class Api {
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

    getInitialCards() {
        const token = localStorage.getItem('token');
        return fetch(`${this._baseUrl}/movies`, { headers:  {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        } })
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
}

export default Api