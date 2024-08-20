

const contenedorCarrito = document.querySelector("#pag-carrito");
let total= 0;

let carritoLS = JSON.parse(localStorage.getItem("carrito"));

carritoLS.forEach(producto => {
    let div = document.createElement("div");
    div.classList.add("productoFlex");
    div.innerHTML= `
            <div class="listaProdFlex">
            <img src= "${producto.imgcar}" class="productoTamano">                  
            <p class="subtituloTypo">${producto.titulo}</p>
            </div>                        
            <p class="subtituloTypo">${producto.cantidad}</p>
            <p class="subtituloTypo">$${producto.precio}</p>
            <p class="subtituloTypo">${producto.cantidad * producto.precio}</p>
    
    `;

    contenedorCarrito.append(div);

   total += producto.cantidad * producto.precio;
    
});

const contenedorSubtotal = document.querySelector("#sub-total");

const agregarSubtotal = () => {
    let div = document.createElement("div");
    div.classList.add("flexSubtotal", "descuentoTypo");
    div.innerHTML = `
        <p> Subtotal </p>
        <p>$ ${total} </p>
    `;
    
    contenedorSubtotal.append(div);
    console.log(total);
}

agregarSubtotal();

const contenedorTotal = document.querySelector("#totalisimo");

const agregarTotalisimo = () => {
    let div = document.createElement("div");
    div.classList.add("flexSubtotal", "totalTypo");
    div.innerHTML = `
        <p> Total </p>
        <p>$ ${total} </p>
    `;
    
    contenedorTotal.append(div);
    console.log(total);
}

agregarTotalisimo();

