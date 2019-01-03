
const api = "https://eb-apis.firebaseapp.com/api/v1"

// Generate a unique token for storing your unicorn-location data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json'
  // 'visitorization': token
}

  export const get = (id) =>
  fetch(`${api}/unicorns/${id}`, { headers })
    .then(res => res.json())
    .then(data => data.unicorn)

export const getAll = () =>
  fetch(`${api}/unicorns`, { headers })
    .then(res => res.json())
    .then(data => data.unicorns)

export const update = (unicorn, location) =>
  fetch(`${api}/unicorns/${unicorn.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ location })
  }).then(res => res.json())

export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.unicorns)
