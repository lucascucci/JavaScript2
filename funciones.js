const carrito = [];
let totalCarrito;
let contenedor = document.getElementById("misprods");
function renderizarProds(){
    for(const producto of productos){
        contenedor.innerHTML += `
            <div class="card col-sm-2">
                <img src=${producto.foto} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.id}</h5>
                    <p class="card-text">${producto.nombre}</p>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id="btn${producto.id}" class="btn btn-primary">Comprar</button>
                </div>
            </div>
        `;
    }
    productos.forEach(producto => {
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            agregarAlCarrito(producto);
        });
    })
}
renderizarProds();
function agregarAlCarrito(productoComprado){
    carrito.push(productoComprado);
    console.table(carrito);
    alert("Producto: "+productoComprado.nombre+" agregado al carrito!");
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${productoComprado.id}</td>
            <td>${productoComprado.nombre}</td>
            <td>$${productoComprado.precio}</td>
        </tr>
    `;
    totalCarrito = carrito.reduce((acumulador,producto)=> acumulador + producto.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total a pagar + IVA $: "+totalCarrito*1.21;
    localStorage.setItem('precio s/IVA',JSON.stringify(totalCarrito));
    calcularIva();
//Agrega una funcion para calcular el iva junto al precio final
    function calcularIva(){
        let precioConIva = totalCarrito * 1.21;
    }
}






