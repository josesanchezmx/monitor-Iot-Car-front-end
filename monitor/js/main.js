//alert("Hola mundo");
let respuesta = document.getElementById("respuesta");

function callApiRequest() {
  // Hacer una petición para un usuario con ID especifico
  axios
    .get(
      "https://3.142.93.23//lot-car-control/back-end/apis/getRegistro.php"
    )
    .then(function (response) {
      // manejar respuesta exitosa
      console.log(response);

      let respuestaServidor =
        response.data == "f"
      ?"ADELANTE"
      : response.data == "b"
      ? "ATRAS"
      : response.data == "s"
      ? "DETENER"
      : response.data == "r"
      ? "DERECHA"
      : response.data == "l"
      ? "IZQUIERDA"
      : "Letra  no reconocida";
      respuesta.innerHTML = "Respuesta: <strong> " + respuestaServidor;
    })
    .catch(function (error) {
      // manejar error
      console.log(error);
    })
    .finally(function () {
      // siempre sera executado
    });
}

setInterval(callApiRequest, 2000);
