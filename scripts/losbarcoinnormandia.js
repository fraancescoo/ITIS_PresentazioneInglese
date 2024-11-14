const primaslide = document.getElementsByClassName('primaslide')[0];
const secondaslide = document.getElementsByClassName('secondaslide')[0];
const terzaslide = document.getElementsByClassName('terzaslide')[0];
const quintaslide = document.getElementsByClassName('quintaslide')[0];
const sestaslide = document.getElementsByClassName('sestaslide')[0];

const sestacanzone = sestaslide.getElementsByClassName('song')[0];

const paragraph = document.getElementsByClassName('paragraph')[0];

(() => {
    let songselem = document.getElementsByClassName('song');
    /**
     * @type {[HTMLDivElement]}
     */
    let songs = [];
    for (let i = 0; i < songselem.length; i++) {
        let s = songselem.item(i);
        if (
            s.parentElement && s.parentElement.parentElement && s.parentElement.parentElement.parentElement && s.parentElement.parentElement.parentElement.parentElement
            && s.parentElement.parentElement.parentElement.parentElement.classList.contains('quintaslide')
        ) {
            songs.push(s);
            s.addEventListener('click', (ev) => {
                if (s.classList.contains('selected')) {
                    s.classList.toggle('selected');
                } else {
                    songs.filter(c => c.classList.contains('selected')).forEach(c => c.classList.remove('selected'));
                    s.classList.toggle('selected');
                }

                sestacanzone.querySelector('img').src = s.querySelector('img').src;
                sestacanzone.querySelector('h1').textContent = s.querySelector('h1').textContent;
                sestacanzone.querySelector('h6').textContent = s.querySelector('h6').textContent;

                let content = 'Nothing';
                switch(s.querySelector('h1').textContent.toLowerCase().replaceAll(' ','-')) {
                    case 'sudowoodo':
                        content = `The moral of Sudowoodo is "never judge what you can't water".<br>This phrase has two meanings:<br><br>1) Never judge anything we haven't taken care of (or don't know about)<br>2) In a gameboy pokemon game, if you watered Sudowoodo while he was sleeping on the path,<br>he would wake up and show himself as pokemon rock, then you<br>could defeat him or capture him and continue playing.`;
                        break;
                    case 'tetris':
                        content = `it's a pop song that never asked to be understood, nor to be loved.<br>It just asks to be danced to.<br>It's about when you finally think you've found some balance in<br>your life, but in the end you realize it's just an illusion.<br>Just like Tetris`;
                        break;
                    case 'ringo-starr':
                        content = `This song explains how it is important for each of us to carefully<br>preserve our uncertainties and learn to be less rigid and more forgiving with ourselves.`;
                        break;
                }
                sestaslide.querySelector('a').innerHTML = content;
            });
        }
    }
})();

/**
 * @type {[HTMLDivElement]}
 */
let slides = [];
let sc = document.getElementsByClassName('slide');
for (let i = 0; i < sc.length; i++) {
    slides[i] = sc.item(i);
}

let _2019 = document.getElementById('date_2019');
let _2020 = document.getElementById('date_2020');
let _2021 = document.getElementById('date_2021');
let _2022 = document.getElementById('date_2022');
let _2023 = document.getElementById('date_2023');

let slide = 0;
let count = -1;

function updateslides() {
    slides.forEach(s => s.classList[s.classList.contains(`slide${slide}`) ? 'remove' : 'add']('hidden'));
}

function update() {
    if (!terzaslide.classList.contains('hidden') && count < 5) {
        count++;
        if (count == 0) {
            if (_2023.classList.contains('active')) _2023.classList.remove('active');
            _2019.classList.add('active');
            paragraph.innerHTML = 'Gold record for the single <span class="ff-helveticabold">Irene</span> and <span class="ff-helveticabold">Verdura</span>.';
        } else if (count == 1) {
            _2019.classList.remove('active');
            _2020.classList.add('active');
            paragraph.innerHTML = 'Gold and platinum record for the single <span class="ff-helveticabold">Ringo Starr</span>.<br>Gold and platinum records for the album <span class="ff-helveticabold">Fuori dall\'hype - Ringo Starr</span>.<br>Gold record for the singles <span class="ff-helveticabold">La storia infinita</span> and <span class="ff-helveticabold">Scooby Doo</span>.';
        } else if (count == 2) {
            _2020.classList.remove('active');
            _2021.classList.add('active');
            paragraph.innerHTML = 'Platinum disc for <span class="ff-helveticabold">Verdura</span> and double platinum disc for <span class="ff-helveticabold">Ridere</span>.<br>Gold record for <span class="ff-helveticabold">Tetris</span> and triple platinum for <span class="ff-helveticabold">Scrivile Scemo</span>.<br>Double platinum for <span class="ff-helveticabold">Ahia!</span>, and double platinum for <span class="ff-helveticabold">Pastello bianco</span>.';
        } else if (count == 3) {
            _2021.classList.remove('active');
            _2022.classList.add('active');
            paragraph.innerHTML = 'Double platinum for the single <span class="ff-helveticabold">Giovani Wannabe</span>.<br>Number one in the FIMI charts with <span class="ff-helveticabold">Ricordi</span>.<br>Award for Best Italian Artist at the 2022 MTV Europe Music Awards. <i>(November 13th)</i>';
        } else if (count == 4) {
            _2022.classList.remove('active');
            _2023.classList.add('active');
            paragraph.innerHTML = 'SIAE Award for the best radio performance of 2022 for the single <span class="ff-helveticabold">Giovani Wannabe</span>. <i>(November)</i><br>SIAE Award to <span class="ff-helveticabold">Riccardo Zanotti</span> for achievements in audio-streaming.<br><span class="ff-helveticabold">8</span> most listened to artists of the year in Italy, and the only pop band in the country\'s <span class="ff-helveticabold">Top 10</span>. <i>(Spotify Wrapped)</i><br>Inclusion of the <span class="ff-helveticabold">Fake News Indoor Tour - Palasport 2024</span> in the <span class="ff-helveticabold">Top 10</span> of the most successful world tours.';
        } else if (count == 5) {
            paragraph.innerHTML = 'Record for the number of paying people at an Italian concert at the <span class="ff-helveticabold">RCF Arena</span> in <span class="ff-helveticabold">Reggio Emilia</span>, with over <span class="ff-helveticabold">80.000</span> spectators. <i>(September 9th)</i>';
        }
    } else if (!quintaslide.classList.contains('hidden') && document.getElementsByClassName('selected').length < 1) {
    } else {
        slide++;
        if (slide > 6) slide = 1;
        updateslides();
        count = -1;
    }
}

update();

document.body.addEventListener('keypress', (event) => {
    if (event.key !== 'Enter') return;
    update();
});