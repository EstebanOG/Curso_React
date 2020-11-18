//const URL = 'https://faker-products.herokuapp.com/'; // PRODUCCCIÓN
const URL = 'http://localhost:3000/'; // PRUBAS DE DESAROLLO

export function send(request) {
  return fetch(request.url, {
    method: request.method,
    headers: request.headers,
    body: JSON.stringify(request.data),
  }).then(response => response.json());
}

export function get(endpoint) {
  return send({
    url: `${URL}${endpoint}`,
    method: 'GET',
  });
}

export function post(endpoint, data) {
  return send({
    url: `${URL}${endpoint}`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data,
  });
}

export function put(endpoint, data) {
  return send({
    url: `${URL}${endpoint}`,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    data,
  });
}

export function del(endpoint) {
  return send({
    url: `${URL}${endpoint}`,
    method: 'DELETE',
  });
}
