document.addEventListener("DOMContentLoaded", function() {
  const nuevoParagrafo = document.createElement("p");
  nuevoParagrafo.textContent = "Haz clic para cambiar la apariencia ;)";
  nuevoParagrafo.style.cursor = "pointer";
  const container = document.getElementById("container");
  container.appendChild(nuevoParagrafo);

  nuevoParagrafo.addEventListener("click", function() {
    this.style.color = "red";
    this.style.fontSize = "20px";
  });

  const boton = document.getElementById("canviText");
  boton.addEventListener("click", function() {
    document.title = "Título cambiado correctamente";
    document.querySelector("h1").textContent = "Nuevo Título";

    const nuevaLista = document.createElement("li");
    nuevaLista.textContent = "Elemento 4";
    const lista = document.querySelector("ul");
    lista.appendChild(nuevaLista);
  });

  const formulario = document.getElementById("formulari");
  const listaSugerimentos = document.getElementById("llistaSuggeriments");

  formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputText = document.getElementById("inputText").value;

    const nuevoSugerimento = document.createElement("li");

    const textSuggeriment = document.createElement("span");
    textSuggeriment.textContent = inputText;
    
    const botonRealizado = document.createElement("button");
    botonRealizado.textContent = "Realizado";
    botonRealizado.style.marginLeft = "10px";
    botonRealizado.addEventListener("click", function() {
      textSuggeriment.style.textDecoration = "line-through";
    });

    const botonELiminar = document.createElement("button");
    botonELiminar.textContent = "Eliminar";
    botonELiminar.style.marginLeft = "10px";
    botonELiminar.addEventListener("click", function() {
      nuevoSugerimento.remove();
    });

    nuevoSugerimento.appendChild(textSuggeriment);
    nuevoSugerimento.appendChild(botonRealizado);
    nuevoSugerimento.appendChild(botonELiminar);

    listaSugerimentos.appendChild(nuevoSugerimento);

    document.getElementById("inputText").value = "";
  });
});
