
document.addEventListener("DOMContentLoaded", function() {
    const nouParraf = document.createElement("p"); 
    nouParraf.textContent = "Fes clic aquí per canviar el color i la mida!";
    nouParraf.style.cursor = "pointer";
    const container = document.getElementById("container"); 
    container.appendChild(nouParraf); 
  
    nouParraf.addEventListener("click", function() {
      this.style.color = "red";
      this.style.fontSize = "20px"; 
    });
  
    const boton = document.getElementById("canviText");
    
    boton.addEventListener("click", function() {
      document.title = "Títol canviat";
      
      document.querySelector("h1").textContent = "Nou Títol";

      const novaLlista = document.createElement("li"); 
      novaLlista.textContent = "Element 4"; 
      const llista = document.querySelector("ul"); 
      llista.appendChild(novaLlista);
      
      const nuevoP = document.getElementById("parrafOriginal");
      nuevoP.textContent = "Text cambiat";
    });
  });
  