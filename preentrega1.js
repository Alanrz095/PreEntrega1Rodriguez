function descuento(precio, porcentaje){
    let operacion;
    for(let i = 0; i < 1; i++){
        if((precio > 0) && (porcentaje > 0)){
            operacion = precio - ((precio * porcentaje) / 100);
        } else{
            alert("Ingrese un número mayor a cero");
        }
    }
    alert("El nuevo precio con descuento es de " + "$" + operacion)
}

