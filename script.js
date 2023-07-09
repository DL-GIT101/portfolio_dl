const articles = document.querySelectorAll('article');

const about = document.querySelector('nav > ul > li.about');
const aboutP = document.querySelector('nav > ul > li.about > p');

const project = document.querySelector('nav > ul > li.projects');
const projectP = document.querySelector('nav > ul > li.projects > p');

const projects = document.querySelector('nav > ul > li.projects > ul');
console.log(articles);
about.addEventListener('click', () => {
    aboutP.style.opacity = "0.5";
    projectP.removeAttribute('style');
    projects.classList.remove('show');
    projectsList.forEach(list => {
        list.removeAttribute('style');
    });
    articles.forEach(article => {
        article.classList.remove('show');
        article.removeAttribute('style');
        article.style.zIndex = "1";
    });
    articles[0].classList.add('show');
    articles[0].style.zIndex = "2";
});

project.addEventListener('click', () => {
    projectP.style.opacity = "0.5";
    projects.classList.add('show');
    aboutP.removeAttribute('style');
});

const projectsList = document.querySelectorAll('nav > ul > li.projects > ul > li');

projectsList.forEach((project, i) => {
    project.addEventListener('click', () => {
        projectsList.forEach(list => {
            list.removeAttribute('style');
        });
        project.style.opacity = "0.5";
        articles.forEach(article => {
            article.classList.remove('show');
            article.removeAttribute('style');
            article.style.zIndex = "1";
        });
        articles[i+1].classList.add('show');
        articles[i+1].style.zIndex = "2";
    });
   
});