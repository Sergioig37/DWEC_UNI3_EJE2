window.addEventListener("load", init);

function pulsarBoton() {
    var texto = document.getElementById("txaEntrada").value;
    document.getElementById("pSalida").innerHTML = "<p>" + texto + "</p>";
    document.getElementById("txaEntrada").value = "";
}
function init() {
    document.getElementById("btnBoton").addEventListener("click", pulsarBoton, false);
}
