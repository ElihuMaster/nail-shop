let showd1 = () => {
    document.querySelector('.populares').style.display = 'grid';
    document.querySelector('.paris').style.display = 'none';
    document.querySelector('.flores').style.display = 'none';
}

let showd2 = () =>{
    document.querySelector('.flores').style.display = 'grid';
    document.querySelector('.populares').style.display = 'none';
    document.querySelector('.paris').style.display = 'none';
}

let showd3 = () =>{
    document.querySelector('.paris').style.display = 'grid';
    document.querySelector('.populares').style.display = 'none';
    document.querySelector('.flores').style.display = 'none';

}

let container = document.querySelector('.containerPadre');
let li = document.querySelectorAll('li');

li.forEach(el => {
    el.addEventListener('click', function(){
        container.querySelector('.active').classList.
                remove('active');

        el.classList.add('active');
    });
});


let botonCar = document.querySelector('.carrito').addEventListener('click', function () {
    botonCar.querySelector('.container-table').classList
  })