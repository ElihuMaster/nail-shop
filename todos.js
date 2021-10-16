const infProducto = document.querySelector('.populares')
const infParis = document.querySelector('.paris')
const infFlores = document.querySelector('.flores')

const templateCards = document.querySelector('#template-cards').content
const templateCar = document.querySelector('#template-carrito').content
const templateFooter = document.querySelector('#template-footer').content
const items = document.querySelector('#items')
const footer = document.querySelector('#footer')
const fragment = document.createDocumentFragment()
let carrito = {}


document.addEventListener('DOMContentLoaded', () =>{
    fetchData()

    // if (localStorage.getItem('llave')) {
    //     carrito = JSON.parse(localStorage.getItem('llave'))
    //     pintarCarrito()
    // }
})

infProducto.addEventListener('click', (e) => { //importante con esto solo detectamos una sola vez el boton 
    //sin necesidad de estar capturando cada boton individualmente
    addCarrito(e)
})

infParis.addEventListener('click', (e) => {
    addCarrito(e)
})

infFlores.addEventListener('click', (e) => {
    addCarrito(e)
})

items.addEventListener('click', (e) => {
    btnAccion(e)
})



const fetchData = async () => {
    try {
        const res = await fetch('nail.json')
        const resParis = await fetch('nailParis.json')
        const resFlores = await fetch('nailFlores.json')
        const data = await res.json()
        const dataParis = await resParis.json()
        const dataFlores = await resFlores.json()
        // console.log(data)
        pintarProducto(data)
        pintarParis(dataParis)
        pintarFlores(dataFlores)
        
    } catch (error) {
        console.log(error);
    }
}


const pintarProducto = (data) => {
    data.forEach(producto => {
        templateCards.querySelector('p').textContent = producto.precio
        templateCards.querySelector('h5').textContent = producto.categoria
        templateCards.querySelector('img').setAttribute('src', producto.imagen)
        templateCards.querySelector('.btn').dataset.id = producto.id
        const clone = templateCards.cloneNode(true)
        fragment.appendChild(clone)
    //  console.log(producto)
    });
    infProducto.appendChild(fragment)
}

const pintarParis = (dataParis) => {
    dataParis.forEach(producto => {
        templateCards.querySelector('p').textContent = producto.precio
        templateCards.querySelector('h5').textContent = producto.categoria
        templateCards.querySelector('img').setAttribute('src', producto.imagen)
        templateCards.querySelector('.btn').dataset.id = producto.id
        const clone = templateCards.cloneNode(true)
        fragment.appendChild(clone)
    //  console.log(producto)
    });
    infParis.appendChild(fragment)
}

const pintarFlores = (dataFlores) => {
    dataFlores.forEach(producto => {
        templateCards.querySelector('p').textContent = producto.precio
        templateCards.querySelector('h5').textContent = producto.categoria
        templateCards.querySelector('img').setAttribute('src', producto.imagen)
        templateCards.querySelector('.btn').dataset.id = producto.id
        const clone = templateCards.cloneNode(true)
        fragment.appendChild(clone)
    //  console.log(producto)
    });
    infFlores.appendChild(fragment)
}

const addCarrito = e => {
    // console.log(e.target.classList.contains('btn-dark'))
        // console.log(e.target)
    if(e.target.classList.contains('btn')){
        setCarrito(e.target.parentElement)
        // console.log(e.target.parentElement);
    }
    
    e.stopPropagation()
    //tenemos que crear un objeto vacio
   
    }

const btnAccion = (e) => {
    if (e.target.classList.contains('btn-info')) {
       const product = carrito[e.target.dataset.id]
       product.cantidad++
       carrito[e.target.dataset.id] = {...product}
       pintarCarrito()
    }

    if (e.target.classList.contains('btn-danger')) {
        const product = carrito[e.target.dataset.id]
        product.cantidad--
        if (product.cantidad === 0) {
            
            delete carrito[e.target.dataset.id]
        }
        pintarCarrito()
     }
    e.stopPropagation()
}       

//luego agregamos "(set)" lo que se va a mostrar en ese objeto vacio

const setCarrito = (objeto) => {
    const producto = {
    id: objeto.querySelector('.btn').dataset.id,
    categoria: objeto.querySelector('h5').textContent,
    precio: objeto.querySelector('p').textContent,
    cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }
        carrito[producto.id] = {...producto}
        pintarCarrito()
    // console.log(carrito);
}

const pintarCarrito = () => {
    items.innerHTML = ''
 Object.values(carrito).forEach(producto => {
     templateCar.querySelector('th').textContent = producto.id
     templateCar.querySelectorAll('td')[0].textContent = producto.categoria
     templateCar.querySelectorAll('td')[1].textContent = producto.cantidad
     templateCar.querySelector('.btn-info').dataset.id = producto.id
     templateCar.querySelector('.btn-danger').dataset.id = producto.id
     templateCar.querySelector('span').textContent = producto.cantidad * producto.precio
     
     const clone = templateCar.cloneNode(true)
     fragment.appendChild(clone)
 })
    items.appendChild(fragment)
    pintarFooter()

    // localStorage.setItem('llave', JSON.stringify(carrito))//Json.stringify: Convierte un objeto de js en una cadena de texto
    
}

const pintarFooter = () =>{
    footer.innerHTML = ""
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th> 
        `
        return
    }
    
    const sumaCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad,0)
    const precioTotal = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio,0)
    templateFooter.querySelectorAll('td')[0].textContent = sumaCantidad
    templateFooter.querySelectorAll('th')[1].textContent = precioTotal
    
    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)
    
    const vaciar = document.getElementById('vaciar-carrito')
    vaciar.addEventListener('click', () => {
        carrito = {}
        pintarCarrito()
    })
}
