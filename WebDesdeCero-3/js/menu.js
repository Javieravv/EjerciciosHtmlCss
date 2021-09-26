// JavaScript para menu

const hamburguer =document.querySelector('.hamburguer');
const menu  = document.querySelector('.menu-navegacion');

// console.log (menu);
// console.log(hamburguer);

hamburguer.addEventListener('click', ()=>{
    // Le agregamos al menu una clase ya creada para visualizarlo
    menu.classList.toggle("spread");
})

// Una vez el menú está visualizado, para no ponerle z-index, entonces
// cada vez que se dé click en cualquier elemento se cierre el menú, siempre y cuando 
// esté abierto

window.addEventListener('click', e=> {
    if (menu.classList.contains('spread') && e.target != menu && e.target != hamburguer) {
        menu.classList.toggle("spread");
    }
})


