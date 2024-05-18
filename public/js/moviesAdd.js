alert("bienvenido a la vista de agregar una pelicula");
window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  let agregarPelicula = document.querySelector(".botonAgregar");
  let imputTitle = document.querySelector("#titulo");

  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  titulo.addEventListener("mouseover", () => {
    titulo.style.color = "red";
    agregarPelicula.style.backgroundColor = "white";
    agregarPelicula.style.color = "red";
  });
  titulo.addEventListener("mouseout", () => {
    agregarPelicula.style.backgroundColor = "green";
    agregarPelicula.style.color = "white";
    titulo.style.color = "black";
  });

imputTitle.style.color= 'red'

let estadoSecreto = '0'
// Escucha el evento de presionar una tecla en el input
imputTitle.addEventListener('keydown', (event) => {
    const teclaPresionada = event.key.toLowerCase();


    switch (estadoSecreto) {
        case 0:
            if (teclaPresionada === 's') {
                estadoSecreto = 1;
            }
            break;
        case 1:
            if (teclaPresionada === 'e') {
                estadoSecreto = 2;
            }
            break;
        case 2:
            if (teclaPresionada === 'c') {
                estadoSecreto = 3;
            }
            break;
        case 3:
            if (teclaPresionada === 'r') {
                estadoSecreto = 4;
            }
            break;
        case 4:
            if (teclaPresionada === 'e') {
                estadoSecreto = 5;
            }
            break;
        case 5:
            if (teclaPresionada === 't') {
                estadoSecreto = 6;
            }
            break;
        case 6:
            if (teclaPresionada === 'o') {
                estadoSecreto = 0;
                alert('SECRETO MAGICO');
            }
            break;
        default:
            estadoSecreto = 0;
            break;
    }
});
};
