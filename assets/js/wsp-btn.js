window.onscroll = function() {
    // Obtén la posición actual del desplazamiento vertical
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Establece la posición en la que deseas mostrar el botón (por ejemplo, 200 píxeles desde la parte superior)
    var showButtonPosition = 1000;
    
    // Si la posición de desplazamiento es mayor o igual que la posición deseada, muestra el botón; de lo contrario, ocúltalo.
    if (scrollTop >= showButtonPosition) {
      document.getElementById("btn-wsp").style.display = "flex";/*flex por que asi se ajusta la imagen al centro */
    } else {
      document.getElementById("btn-wsp").style.display = "none";
    }
  };

  // Agrega una función para manejar el clic en el botón si quieres hacer algo cuando se haga clic
  /*document.getElementById("btn-wsp").addEventListener("click", function() {
    // Realiza alguna acción cuando se haga clic en el botón
    alert("¡Te redigiremos a whatsap !, esta bien?");
  });*/