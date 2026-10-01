// Act 1.
function act1() {
    const precio = parseFloat(window.prompt("Introduce el precio del producto: "));
    return precio;
}

const precio = act1();

// Act 2.
function act2() {
    const cantidad = parseInt(window.prompt("Introduce la cantidad de unidades: "));
    return cantidad;
}

const cantidad = act2();

// Act 3.
function act3(precio, cantidad) {
    const importe = precio * cantidad;
    console.log("El importe de la compra es: " + importe);
    return importe;
}

const importe = act3(precio, cantidad);

// Act 4,5,6,7,8.
function act4(importe) {
    let descuento = 0;
    if (importe < 50) {
        descuento = 0;
    } else if (importe >= 50 && importe < 100) {
        descuento = 5;
    } else if (importe >= 100 && importe < 200) {
        descuento = 10;
    } else {
        descuento = 15;
    }
    return descuento;
}

const descuento = act4(importe);



// Act 9. 
function act9(importe, descuento) {
    const totalDescuento = importe - (importe * descuento / 100);
    const iva = totalDescuento * 0.21;
    const totalFinal = totalDescuento + iva;
    console.log("El precio con IVA es: " + totalFinal.toFixed(2));
    return totalFinal;
}

act9(importe, descuento);

// Act 10.
function act10() {
    let pregunta = window.confirm("¿Desea realizar otra operación?");
    console.log(pregunta);
    }

act10();

//Act 11.
function act11() {
    let mensaje = window.prompt();
}

// act11();