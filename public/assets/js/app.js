function titleEffect(){
    
    if(document.querySelector('.hero hgroup')) {
        const title = document.querySelector('.hero hgroup');
        let offY = window.scrollY;
    
        if(offY <= 600) {
    
            title.style.opacity = 1 - (offY/500)
            title.style.transform =  `translateY(${ offY/2 }px)`;
        }
    }
}

function parallax(){

    if(document.querySelector('.hero')) {
        const hero = document.querySelector('.hero');
        let offY = window.scrollY;
        hero.style.backgroundPosition = `50% -${ offY/5 }px`;
    }

}

window.addEventListener('scroll', () => titleEffect(), true);
window.addEventListener('load', () => titleEffect(), true);

window.addEventListener('scroll', () => parallax(), true);
window.addEventListener('load', () => parallax(), true);