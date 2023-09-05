let currentDate = "2023-01-01";
let upcomingData = data.events.filter(evento => Date.parse(evento.date) > Date.parse(currentDate))

let contenedorCartas = document.getElementById('card-container');
let checkbox = document.getElementById('_checklist');
let searchBar = document.getElementById('searchBar');
let arrayNombresEventos = upcomingData.map(evento => evento.category);
let submitBtn= document.getElementById('submitBtn');

function crearCheckbox(array) {
  let template = '';
  for (let evento of array) {
    template += `
    <div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="kjs" value="${evento}">
      <label class="form-check-label" for="${evento}">${evento}</label>
    </div>
    `
  }
  return template;
};
submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  });

checkbox.innerHTML = crearCheckbox(arrayNombresEventos);

checkbox.addEventListener('change', (e) => {
  let nodeList = document.querySelectorAll('input[type="checkbox"]:checked');
  let arrayMarcados = Array.from(nodeList).map(input => input.value);
  let arrayFiltrado = upcomingData.filter(evento => arrayMarcados.includes(evento.category));
  newCard(arrayFiltrado);
  cardsIniciales(upcomingData);
})

cardsIniciales(upcomingData);

searchBar.addEventListener('keyup', (e) => {
  e.preventDefault();
  let nodeList = document.querySelectorAll('input[type="checkbox"]:checked');
  let arrayMarcados = Array.from(nodeList).map(input => input.value);
  let searchBarInput = document.querySelector('.form-control');
  let busqueda = searchBarInput.value;
  let busquedaFiltrada = upcomingData.filter(evento => evento.name.toLowerCase().includes(busqueda.toLowerCase()))
  console.log(busquedaFiltrada);
  let arrayFiltrado = busquedaFiltrada.filter(evento => arrayMarcados.includes(evento.category));
  newCard(arrayFiltrado);
});
function cardsIniciales(array) {
  if (contenedorCartas.innerHTML.trim() === "") {
    newCard(array);
  }
}
function newCard(array) {
  let content = '';
  for (let evento of array) {
    content += `<div class="card mb-3" style="width: 18rem;">
<img src="${evento.image}" class="card-img-top" style="height: 12rem" alt="imagen_evento">
<div class="card-body d-flex flex-column justify-content-between">
<label class="container">
  <input type="checkbox" class="checkbox" id="like">
  <svg id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path></svg>
</label>
    <h5 class="card-title">${evento.name}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${evento.category}</h6>
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




