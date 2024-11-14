window.canzonecasuale5 = () => {
    (() => {
        let s = document.getElementsByClassName('selected');
        for(let i = 0; i < s.length; i++) {
            s.item(i).classList.remove('selected');
        }
    })();

    let songselem = document.getElementsByClassName('quintaslide')[0].getElementsByClassName('song');
    songselem.item(Math.floor(Math.random() * songselem.length)).classList.add('selected');
}