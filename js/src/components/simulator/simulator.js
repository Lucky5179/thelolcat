import sound1 from '~/src/sounds/hss.mp3';
import sound2 from '~/src/sounds/mau2.mp3';
import sound3 from '~/src/sounds/hss2.mp3';
import sound4 from '~/src/sounds/mau3.mp3';
import { pushed } from '../splashscreen/splashscreen';

const container = document.querySelector('.js-simulator');
const stickersContainer = document.querySelector('.js-simulator-stickers');
let flag = false;
const sounds = [];
const stickersEn = [
    '2021',
    'cat',
    'censored',
    'eye',
    'leave-me-in-peace',
    'stitch',
    'leave-me-alone',
    'give-me-a-break',
    'go-away',
    '2cats',
    'box',
    'exmark',
    'deadmouse',
    'catmask',
    'frame',
    'can',
    'virus'
];
/*const stickersRu = [
    ...stickersEn,
    'lapy',
    'samsebyaglad',
    'sebyatrogay'
];*/

[sound1, sound2, sound3, sound4].forEach(x => {
    const audio = new Audio(x);
    audio.addEventListener('ended', () => { flag = false; });
    sounds.push(audio);
});

function getRandomEl(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


/**
 * Переключаем год 2020/2021
 */
document
    .querySelector('.js-toggle-simulator')
    .addEventListener('change', (e) => {
        if (e.target.checked) {
            App.H.classList.remove('_has-open-simulator');
        } else {
            App.H.classList.add('_has-open-simulator');
        }
    });


/**
 * Привязываем звук кота после того,
 * как пользователь нажал кнопку на сплешскрине
 */
pushed.then(() => {
    container.addEventListener('touchstart', playSound);
    container.addEventListener('mousedown', playSound);
});


function playSound(event) {
    if (flag || !event.target.closest('.js-simulator-zone')) return;
    flag = true;

    const randomSound = getRandomEl(sounds);
    randomSound.play();

    createSticker(event);
}


/**
 * Создаём стикер с рандомным фоном и рандомным
 * углом поворота от -45 до +45 градусов
 */
function createSticker(event) {
    const x = event.touches ? event.touches[0].clientX : event.x;
    const y = event.touches ? event.touches[0].clientY : event.y;
    const name = App.H.getAttribute('lang') === 'ru' ? getRandomEl(stickersRu) : getRandomEl(stickersEn);
    const angle = Math.ceil(Math.random() * 45) * (Math.round(Math.random()) ? 1 : -1);
    const sticker = `<div
        class="sticker sticker--${name} simulator__sticker"
        style="left: ${x}px; top: ${y}px; transform: translateX(-50%) translateY(-50%) rotate(${angle}deg)"
    ></div>`;

    stickersContainer.insertAdjacentHTML('beforeend', sticker);
}


/**
 * Сбрасываем все стикеры, если вернулись на сплэшскрин
 * кликом по логотипу
 */
document.querySelector('.js-start').addEventListener('click', () => {
    stickersContainer.innerHTML = '';
});
