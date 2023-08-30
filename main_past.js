let currentDate = "2023-01-01";
let pastData = [];

function UpcomingFilter(array) {
  for (let evento of array.events) {
    if (Date.parse(evento.date) < Date.parse(currentDate)) {
      pastData.push(evento);
    }
  }
  return pastData;
}

UpcomingFilter(data);

/* Referencia al contenedor padre */
let contenedorCartas = document.getElementById('card-container');

function newCard(array) {
  for (let evento of array) {
    let carta = document.createElement('div');
    carta.className = 'card mb-3';
    carta.style.width = '18rem';
    contenedorCartas.appendChild(carta);

    let imgCarta = document.createElement('img');
    imgCarta.src = evento.image;
    imgCarta.className = 'card-img-top';
    imgCarta.alt = 'imagen evento';
    imgCarta.style.height = '12rem';
    carta.appendChild(imgCarta);

    let divCardBody = document.createElement('div');
    divCardBody.className = 'card-body d-flex flex-column justify-content-between';
    carta.appendChild(divCardBody);


    let h5Carta = document.createElement('h5');
    h5Carta.className = 'card-title';
    h5Carta.textContent = evento.name;
    divCardBody.appendChild(h5Carta);

    let pCarta = document.createElement('p');
    pCarta.className = 'card-text';
    pCarta.textContent = evento.description;
    divCardBody.appendChild(pCarta);

    let divCarta = document.createElement('div');
    divCarta.className = 'details d-flex align-items-center justify-content-around gap-5'
    divCardBody.appendChild(divCarta);

    let priceCarta = document.createElement('p');
    priceCarta.textContent = `Price: $${evento.price}`;
    priceCarta.className = 'mb-0';
    divCarta.appendChild(priceCarta);

    let detailsLinkCarta = document.createElement('a');
    detailsLinkCarta.className = 'btn btn-primary';
    detailsLinkCarta.href = 'Details.html';
    detailsLinkCarta.textContent = 'Details';
    divCarta.appendChild(detailsLinkCarta);
  }
}
document.addEventListener('DOMContentLoaded', function () {
  newCard(pastData);
});












