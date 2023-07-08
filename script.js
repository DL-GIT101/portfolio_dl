const articles = document.querySelectorAll('article');

const aboutList = document.querySelector('nav > ul > li.about');
const aboutListP = document.querySelector('nav > ul > li.about > p');

const projectList = document.querySelector('nav > ul > li.projects');
const projectListP = document.querySelector('nav > ul > li.projects > p');

const topList = document.querySelector('nav > ul > li.projects > ul');

aboutList.addEventListener('click', () => {
    aboutListP.style.opacity = "0.5";
    projectListP.removeAttribute('style');
    articles[0].className = "show";
});

projectList.addEventListener('click', () => {
    projectListP.style.opacity = "0.5";
    topList.classList.add('show');
    aboutListP.removeAttribute('style');
});

