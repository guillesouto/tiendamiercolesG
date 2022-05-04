# tiendamiercolesG
proyecto miércoles cesde 2022
04/05---03/06
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


//Debo capturar la cantidad y agregarla al producto
    let cantidad = document.getElementById("contadorProductos").value
    producto.cantidad=cantidad
    console.log(cantidad)

    //agregamos el subtotal al producto
    producto.subtotal= producto.cantidad * producto.precio


    //agrego el producto al carrito
    carrito.push(producto)
