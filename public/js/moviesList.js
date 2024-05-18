window.onload = function () {
  let body = document.querySelector("body");
  let moviesListTitulo = document.querySelector(".moviesListTitulo");
  let logoDH = document.querySelector("figure");
  logoDH.addEventListener("mouseover", function () {
     let modo = confirm("Desea modo oscuro");
     if (modo) {
      body.style.backgroundColor = "#7f7f7f";
      body.classList.add("fondoMoviesList");
     } else {
       body.classList.remove("fondoMoviesList");
       body.style.backgroundColor = "white";
     }

   });

  console.log(body);
  moviesListTitulo.innerHTML = "LISTADO DE PELÍCULAS";
  moviesListTitulo.style.color = "white";
  moviesListTitulo.style.backgroundColor = "teal";
  moviesListTitulo.style.padding = "20px";
};
