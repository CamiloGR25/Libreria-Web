$("#limpiar").click(function () {
    limpiarDatos();
})

//Limpia los componentes del formulario
function limpiarDatos() {
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("annio").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("disponible").value = "";
    $('input[name="tipoEjemplar"]').prop("checked", false); //limpiar del input radio
    $("#ubicacion").val("");//con Jquery
}
//volver a la pagina principal
$("#cancelar").click(function () {
    window.location.href = "index.html";
})

//guardar los datos localmente y mostrarlos en la tabla
$("#nuevo").click(function () {

    var titulo = $("#titulo").val();
    var autor = $("#autor").val();
    var genero = $("#genero").val();
    var annio = $("#annio").val();
    var cantidad = $("#cantidad").val();
    var disponible = $("#disponible").val();
    var tipoEjemplar = $('input[name="tipoEjemplar"]:checked').val();
    var ubicacion = $("#ubicacion").val()

    //agrega un nuevo registro a la tabla, después del último tr:
    $("#tablaLibros tr:last").after("<tr><td>" + titulo + "</td><td>" + autor + "</td><td>" + genero + "</td><td>" + annio + "</td><td>" + cantidad + "</td><td>" + disponible + "</td><td>" + tipoEjemplar + "</td><td>" + ubicacion + "</td></tr>");
    limpiarDatos();
})
