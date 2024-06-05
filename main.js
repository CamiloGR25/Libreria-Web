


//Limpia los componentes del formulario
$("#limpiar").click(function () {
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("genero").value = "";
    document.getElementById("annio").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("disponible").value = "";
    document.getElementById("ubicacion").value = "";
    $('input[name="tipoEjemplar"]').prop("checked", false);
})

