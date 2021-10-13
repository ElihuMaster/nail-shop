document.addEventListener('DOMContentLoaded', () =>{
    PlayTimes()
})
 let images = [
    'img-muestra/1.jpg','img-muestra/2.jpg','img-muestra/3.jpg','img-muestra/4.jpg','img-muestra/5.jpg',
    'img-muestra/6.jpg','img-muestra/7.jpg','img-muestra/8.jpg','img-muestra/9.jpg',
    'img-muestra/10.jpg','img-muestra/11.jpg','img-muestra/12.jpg','img-muestra/13.jpg','img-muestra/14.jpg',
    'img-muestra/15.jpg','img-muestra/16.jpg','img-muestra/17.jpg','img-muestra/18.jpg',
    'img-muestra/19.jpg','img-muestra/20.jpg','img-muestra/21.jpg','img-muestra/22.jpg','img-muestra/23.jpg',
    'img-muestra/24.jpg','img-muestra/25.jpg','img-muestra/26.jpg','img-muestra/27.jpg',
    'img-muestra/28.jpg','img-muestra/29.jpg','img-muestra/30.jpg','img-muestra/31.jpg','img-muestra/32.jpg',
    'img-muestra/33.jpg','img-muestra/34.jpg','img-muestra/35.jpg','img-muestra/1.jpg',
];
 const mostrar = document.querySelector('#image-carrusel')
 let inicia = 0;
 const carrusel = () => {
     mostrar.src = images[inicia];
     inicia = (inicia < images.length-1) ? inicia + 1 : 0;
    }
    
    
    const PlayTimes = () => {
        setInterval(carrusel,1000);
    }
    
    
    //  const carrusel = () => {
    //     mostrar.src = images[inicia];
    //     if (inicia < images.length-1) {
    //        inicia = inicia + 1
    //     }else{
    //         inicia = 0
    //     }
    // }