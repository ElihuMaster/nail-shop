document.addEventListener('DOMContentLoaded', () =>{
    PlayTimes()
})
 let images = [
    'imagenes/spa2.jpg', 'imagenes/fondoWeb.jpg'
];

 const mostrar = document.querySelector('#image-carrusel')
 let inicia = 0;
 const carrusel = () => {
     mostrar.src = images[inicia];
     inicia = (inicia < images.length-1) ? inicia + 1 : 0;
    }
    
    
    const PlayTimes = () => {
        setInterval(carrusel,6000);
    }
    
    
    //  const carrusel = () => {
    //     mostrar.src = images[inicia];
    //     if (inicia < images.length-1) {
    //        inicia = inicia + 1
    //     }else{
    //         inicia = 0
    //     }
    // }
