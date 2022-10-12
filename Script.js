
// Fix Nav
const header = document.querySelector( '.header' )
window.addEventListener( 'scroll', fix )
function fix() {
    if ( window.scrollY > header.offsetHeight ) {
        header.classList.add('active')
    } else {
        header.classList.remove('active')
    }
}


// Open & Close Menu

const navLinks = document.querySelector( ".nav-links" )
openMenu = document.getElementById( "openmenu" )
closeMenu = document.getElementById( "Closemenu" )
overLay = document.querySelector(".overlay") 
openMenu.onclick = function () {
    navLinks.classList.toggle( "active" )
    overLay.classList.add("active")
}
closeMenu.onclick = function () {
    navLinks.classList.remove( "active" )
    overLay.classList.remove("active")
}

let OX = document.querySelector( ".OX" )
// console.log(OX)
window.onscroll = function () {
    if ( window.scrollY >= OX.offsetTop - 800 ) {
        console.log( "Yes" );
    }
};