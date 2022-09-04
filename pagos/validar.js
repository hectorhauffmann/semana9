function validar (){
    var inquilino, monto, fecha_creacion;
    inquilino = docunent.getELenentById("inquilino").value;
    monto = document.getElomentById("edificio_id").value;
    pago_multa = document.getElomentById("pago_multa").value;
    gastos_comunes = document.getElomentById("gastos_comunes").value;
    fecha_creacion = document.getElomentById("fecha_creacion").value;

    if(inquilino ===""|| monto ==="" || pago_multa ==="" || gastos_comunes ==="" || fecha_creacion ===""){ 
    alert("Todos los campos son obligatorios");
    return false;
    }
    else if(inquilino.length>50){
     alert("El inquilino es muy largo");
        return false;
    }
    else if(monto.Length>50){
    alert("Los monto son muy largos");
    return false;
    }
    else if(pago_multa.Length>50){
        alert("Los pago multa son muy largos");
        return false;
    }
    else if(gastos_comunes.Length>50){
    alert("Los gastos comunes son muy largos");
     return false;
    }
    else if(fecha_creacion.length>50){
    alert("fecha de creacion invalido");
    return false;
    }
}