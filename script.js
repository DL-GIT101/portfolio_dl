const articles = document.querySelectorAll('article');
const navList = document.querySelectorAll('nav ul li');

navList.forEach(list => {
    list.addEventListener('click', () => {
        navList.forEach(nav => {
            nav.style.opacity = "1";
        });
        list.style.opacity = "0.5";
    });
});

navList[0].addEventListener('click', () => {
    articles[0].className = "show";
});

navList[1].addEventListener('click', () => {
    
});