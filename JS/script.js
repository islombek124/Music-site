const hamburger = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav__menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__item").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

let musics = document.querySelectorAll('.music');

function hideMusicContents(){
    musics.forEach(function(music){
        music.classList.remove('music__active');
    });
}

function showTabContent(i){
    musics[i].classList.add('music__active');
}

musics.forEach(function(item, i){
    item.addEventListener('click', function(){
        console.log(i);
        hideMusicContents();
        showTabContent(i);
    });
});

hideMusicContents();
showTabContent();
