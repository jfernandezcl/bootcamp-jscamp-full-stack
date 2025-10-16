// recupera solo el primer boton que encuentre
// const boton = document.querySelector('.button-apply-job')
// console.log(boton) // null si no lo encuentra

// if (boton !== null) {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// }

// const botones = document.querySelectorAll('.button-apply-job')
// // devuelve un NodeList (array-like) con todos los botones que encuentre
// // o una lista vacia [] si no encuentra ninguno

// botones.forEach(boton => {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// })

const jobsListingSection = document.querySelector(".jobs-listings");

jobsListingSection.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("button-apply-job")) {
    element.textContent = "¡Aplicado!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});

const filter = document.querySelector("#filter-technology");
const mensaje = document.querySelector("#filter-selected-value");
const jobs = document.querySelectorAll(".jobs-listing-card");

filter.addEventListener("change", function () {
  console.log(filter.value);

  if (selectedValue) {
    mensaje.textContent = `Has seleccionado: ${selectedValue}`;
  } else {
    mensaje.textContent = "";
  }

  jobs.forEach((job) => {
    const modality = job.dataset.modality;

    if (selectedValue === "" || selectedValue === modality) {
      job.computedStyleMap.display = "flex";
    } else {
      job.style.display = "none";
    }
  });
});

const searchInput = document.querySelector("#empleos-search-input");
searchInput.addEventListener("input", function () {
  console.log(searchInput.value);
});
