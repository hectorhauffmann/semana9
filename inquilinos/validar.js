function validar (){
    var nombre, apellido, email,telefono, edificio_id, fecha_creacion,expresion;
    nombre = docunent.getELenentById("nombre").value;
    apellido = document.getElementById("apellido").value;
    email = docunent.getElenentById("email").value;
    telefono = document.getElomentById("telefono").value;
    edificio_id = document.getElomentById("edificio_id").value;
    fecha_creacion = document.getElomentById("fecha_creacion").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if(nombre ===""|| apellido ==="" || email === "" || telefono ==="" || edificio_id === "" || fecha_creacion === ""){ 
    alert("Todos los campos son obligatorios");
    return false;
    }
    else if(nombre.length>30){
     alert("El nombre es muy largo");
        return false;
    }
    else if(apellido.Length>88){
    alert("Los apellido son muy largos");
    return false;
    }
    else if(email.length>108){
    alert("EL email es muy largo");
    return false;
    }
    else if(!expresion.test(email)){
    }
    else if(telefono.length>10){
    alert("EL telefono es muy largo");
    return false;
    }
    else if(edificio_id.length>10){
    alert("EL edificioid es muy largo");
    return false;
    }
    else if(fecha_creacion.length>10){
    alert("fecha de creacion invalido");
    return false;
    }
}