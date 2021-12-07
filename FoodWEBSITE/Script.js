let searchFrom = document.querySelector('.search-icon');
let cart = document.querySelector('.shopping-cart-icon');
let login = document.querySelector('.login-icon');
let reset = document.querySelector('.fog-page');
let sigin = document.querySelector('.sigin-page');
let navbar = document.querySelector('.header .navbar');
let forget = document.querySelector('.fog-page');



document.querySelector('#search-btn').onclick = () => {
    searchFrom.classList.toggle('search');
    sigin.classList.remove('sigin')
    cart.classList.remove('cart');
    login.classList.remove('login');
    navbar.classList.remove('search');
    forget.classList.remove('fog');
}


document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('cart');
    sigin.classList.remove('sigin');
    searchFrom.classList.remove('search');
    login.classList.remove('login');
    navbar.classList.remove('cart');
    forget.classList.remove('fog');

}


document.querySelector('#login-btn').onclick = () => {
    login.classList.toggle('login');
    sigin.classList.remove('sigin');
    searchFrom.classList.remove('search');
    cart.classList.remove('cart');
    navbar.classList.remove('login');
    forget.classList.remove('fog');

}


document.querySelector('#forget-btn').onclick = () => {
    forget.classList.toggle('fog');
    sigin.classList.remove('sigin');
    login.classList.remove('login');
    searchFrom.classList.remove('search');
    cart.classList.remove('cart');
    navbar.classList.remove('navbar');
    

}

document.querySelector('#login-btn-a').onclick = () => {
    login.classList.toggle('login');
    sigin.classList.remove('sigin');
    searchFrom.classList.remove('search');
    cart.classList.remove('cart');
    navbar.classList.remove('login');
    forget.classList.remove('fog');

}



document.querySelector('#sigin-btn').onclick = () => {
    sigin.classList.toggle('sigin');
    searchFrom.classList.remove('search');
    cart.classList.remove('cart');
    navbar.classList.remove('navbar');
    forget.classList.remove('fog');
    login.classList.remove('login');

}



document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('navbar');
    sigin.classList.remove('sigin');
    searchFrom.classList.remove('search');
    cart.classList.remove('cart');
    loginForm.classList.remove('login');
    forget.classList.remove('fog');

}

window.onscroll = () => {
    navbar.classList.remove('active');
}




document.querySelector('.home').onmousemove = (e) => {

    let x = (window.innerWidth - e.pageX * 2) / 90;

    let y = (window.innerHeight - e.pageY * 2) / 90;

    document.querySelector('.home  .home-parallax-img').style.transform = 'translateX(${y}px) translateY(${x}px)';
}


document.querySelector('.home').onmouseleave = (e) => {
    document.querySelector('.home  .home-parallax-img').style.transform = 'translateX(0px) translateY(0px)';
}