/**
 * @type {HTMLDivElement}
 */
const songs = document.querySelector('[data-songs]');

/**
 * @type {HTMLInputElement}
 */
const search = document.querySelector('[data-search]');

function hide(c) {
    if(c instanceof HTMLCollection) {
        for(let i = 0; i < c.length; i++) {
            c.item(i).classList.add('hidden');
        }
    }else if(c instanceof Element) {
        c.classList.add('hidden');
    }
}

function show(c) {
    if(c instanceof HTMLCollection) {
        for(let i = 0; i < c.length; i++) {
            c.item(i).classList.remove('hidden');
        }
    }else if(c instanceof Element) {
        c.classList.remove('hidden');
    }
}

search.onkeyup = (e) => {
    let { children } = songs;
    show(children);
    if(!search.value) return;
    /**
     * @type {[HTMLLIElement]}
     */
    let c = [];
    for(let i = 0; i < children.length; i++) {
        c.push(children.item(i));
    }
    c.filter(s => !s.querySelector('div').querySelector('h1').textContent.toLowerCase().includes(search.value)).forEach(s => hide(s));
}