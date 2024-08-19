const productosDestacados = [
    {
        id: "chaleco-otto",
        titulo: "Chaleco Otto",
        precio: 3000,
        img: "./assets/chaleco_otto.jpg",
    },
    {
        id: "camisa-cuadros",
        titulo: "Camisa Cuadros",
        precio: 5000,
        img: "./assets/camisa_cuadros.jpg",
    },
    {
        id: "remera-tsuki",
        titulo: "Remera Tsuki",
        precio: 3500,
        img: "./assets/remera_tsuki.jpg",
    },
    {
        id: "vestido-lilo",
        titulo: "Vestido Lilo",
        precio: 12000,
        img: "./assets/vestido_lilo.jpg",    
    },
    {
        id: "camisa-yoga",
        titulo: "Camisa Yoga",
        precio: 8000,
        img: "./assets/camisa_yoga.jpg",   
    },
    {
        id: "capri-geminis",
        titulo: "Capri Geminis",
        precio: 12000,
        img: "./assets/capri_geminis.jpg",   
    }

];

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const contenedorProductosDestacados = document.querySelector("#productos");
const carritoVacio = document.querySelector("#carrito-vacio");
const carritoProductos = document.querySelector("#carrito-productos");
const carritoTotal = document.querySelector("#carrito-total");
const vaciarCarrito = document.querySelector("#vaciar-carrito");
const irAlCarrito = document.querySelector("#ir-al-carrito");


productosDestacados.forEach((producto) => {

    let div = document.createElement("div");
    // div.classList.add("flexarticle");
    div.innerHTML = `
        <img src="${producto.img}" alt="niño en patineta usando un chaleco rojo">
        <div class="nameFlex">
        <p class="titleCard">${producto.titulo}</p>
        <ion-icon name="heart-outline" class="heartIcon"></ion-icon>
        </div>
        <p class="priceTypo marginPrice">$ ${producto.precio}</p>    
    
    `;

    let button = document.createElement("button");
    button.classList.add("cardButton");
    button.innerText = "Agregar al carrito";
    button.addEventListener("click", () => {
        agregarAlCarrito(producto);
    })

    div.append(button);
    contenedorProductosDestacados.append(div);
});

const agregarAlCarrito = (producto) => {
    let carritoConProductos = carrito.find((articulo) => articulo.id === producto.id);

    if (carritoConProductos) {
        carritoConProductos.cantidad++;
    } else {
        carrito.push({...producto, cantidad:1});
    }

    actualizarCarrito();

    // aca va tostify
    
}

function actualizarCarrito() {
    if (carrito.length === 0) {
        carritoVacio.classList.remove("emptyclass");
        carritoProductos.classList.add("emptyclass");
        vaciarCarrito.classList.add("emptyclass");
    } else {
        carritoVacio.classList.add("emptyclass");
        carritoProductos.classList.remove("emptyclass");
        vaciarCarrito.classList.remove("emptyclass");

        carritoProductos.innerHTML = "";
        carrito.forEach((producto) => {
            let div = document.createElement("div");
            div.classList.add("productosFormato", "subtituloTypo");
            div.innerHTML = `
                <p>${producto.titulo}</p>
                <p>${producto.cantidad}</p>
                <p>$${producto.precio}</p>
                <p>$${producto.cantidad * producto.precio}</p>
            
            `;
            let button = document.createElement("button");
            button.classList.add("btnEliminar");
            button.innerHTML = `
                <ion-icon name="trash-outline"></ion-icon>
            `;
            button.addEventListener("click", () => {
                eliminarDelCarrito(producto);
            })

            div.append(button);
            carritoProductos.append(div);
        })
    }
    actualizarTotal();

    localStorage.setItem("carrito", JSON.stringify(carrito));
}

actualizarCarrito();

function eliminarDelCarrito(producto) {
    const indice = carrito.findIndex((articulo) => articulo.id === producto.id);
    carrito.splice(indice, 1);
    actualizarCarrito();
}

function actualizarTotal() {
    let sumaTotal = carrito.reduce((acc, product) => acc + (product.precio * product.cantidad), 0 );
    carritoTotal.innerText = "$" + sumaTotal;
}



