function saludar(){
    return prompt('Ingrese su nombre por favor');
}

const nombreUsuario =  saludar();
    alert("¡Hola "+nombreUsuario+", bienvenido a la página oficial de Casillas El Yunque!")

function calcularPrecio (precioCasilla,iva){
    let precioFinal=precioCasilla*iva
    alert("El precio de la casilla con iva incluido es de: $"+precioFinal);
}

let casilla= prompt("Ingrese el numero de la casilla de la cual desea conocer el precio:\n 1- Casilla para dos personas \n 2- Casilla para cuatro personas \n 3- Casilla para seis personas \n 4- Casilla comedor \n 5- Casilla dormitorio \n Escriba salir para finalizar")

while (casilla != "salir"){
    if (casilla == "1"){
        calcularPrecio(4100000,1.21);
    }else if (casilla == "2"){
        calcularPrecio(4400000,1.21);
    }else if (casilla == "3"){
        calcularPrecio(4700000,1.21);
    }else if (casilla == "4"){
        calcularPrecio(4300000,1.21);
    }else if (casilla == "5"){
        calcularPrecio(3900000,1.21);
    }

    casilla=prompt("Ingrese el numero de la casilla de la cual desea conocer el precio:\n 1- Casilla para dos personas \n 2- Casilla para cuatro personas \n 3- Casilla para seis personas \n 4- Casilla comedor \n 5- Casilla dormitorio \n Escriba salir para finalizar")

}












