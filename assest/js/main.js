var myBars = document.querySelector('.fa-bars');
var myMenu = document.querySelector('.menu');
var myBack = document.querySelector('.back-black');
var myClose = document.querySelector('.menu-list-item-close');
myBars.onclick = function() {
    myMenu.classList.remove('menu-hidden');
    myBack.classList.remove('back-hidden');
}

myClose.onclick = function() {
    myMenu.classList.add('menu-hidden');
    myBack.classList.add('back-hidden');
}

myBack.onclick = function() {
    myMenu.classList.add('menu-hidden');
    myBack.classList.add('back-hidden');
}