import homepage from './homepage.js';
import { showCupboard } from './ourcollection.js';
// import contact from './contactus.js';

const content = document.querySelector('#content');

const nav = document.querySelector('#top-nav');
nav.addEventListener('click', navClick);

function navClick(e) {
    content.replaceChildren(); //empties content container
    const activePage = document.querySelector('.active');
    activePage.classList.toggle('active');
    e.target.classList.toggle('active');
    if(e.target === nav.querySelector('li:nth-child(1)')) {
        homepage();
    }
    if(e.target === nav.querySelector('li:nth-child(2)')) {
        showCupboard();
    }
    if(e.target === nav.querySelector('li:nth-child(3)')) {
        content.textContent = "third page blah blah";
    }
}
