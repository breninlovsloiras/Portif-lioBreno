function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 75 * i);
  });
}

const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);

document.getElementById("toggle-dark-mode").addEventListener("change", function () {
  const body = document.body;
  const modalContent = document.querySelector('.modal-content');

  body.classList.toggle("dark-mode");
  modalContent.classList.toggle("dark-mode");
  document.querySelector("header").classList.toggle("dark-mode");
  document.querySelector(".profile-info").classList.toggle("dark-mode");
  document.querySelector("#container").classList.toggle("dark-mode");
  document.querySelector("#maeprojetos").classList.toggle("dark-mode");
  document.querySelector("#maeskills").classList.toggle("dark-mode");
  document.querySelector("#contato").classList.toggle("dark-mode");

  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");

  if (body.classList.contains("dark-mode")) {
    img1.src = "darkbloco.PNG";

  } else {
    img1.src = "whitebloco.PNG";

  }
});

const form = document.querySelector('form');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  modal.style.display = 'block';
});

closeButton.addEventListener('click', function () {
  modal.style.display = 'none';
});






