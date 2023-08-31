/* Referencia al contenedor padre */
let contenedorCartas = document.getElementById('card-container');

function newCard(array) {
  let content = '';
  for (let evento of array.events) {
    content += `<div class="card mb-3" style="width: 18rem;">
<img src="${evento.image}" class="card-img-top" style="height: 12rem" alt="imagen_evento">
<div class="card-body d-flex flex-column justify-content-between">
    <h5 class="card-title">${evento.name}</h5>
    <p class="card-text">${evento.description}</p>
    <div class="details d-flex align-items-center justify-content-around gap-5">
        <p class="mb-0">Price: $${evento.price}</p>
        <a href="Details.html?id=${evento._id}" class="btn btn-primary">Details</a>
    </div>
</div>
</div>`;
  }
  contenedorCartas.innerHTML = content;
}

document.addEventListener('DOMContentLoaded', function () {
  newCard(data);
});












