import soundMur1 from '~/src/sounds/mur.mp3';
import soundMur2 from '~/src/sounds/mur_2.mp3';
import soundMur3 from '~/src/sounds/mur_3.mp3';
import soundMur4 from '~/src/sounds/mur_4.mp3';
import { pushed } from '../splashscreen/splashscreen';

let flag = false;
let murs = [];
[soundMur1, soundMur2, soundMur3, soundMur4].forEach(x => {
    const audio = new Audio(x);
    murs.push(audio);
});


/**
 * Привязываем звук поглаживания кота после того,
 * как пользователь нажал кнопку на сплешскрине
 */
pushed.then(() => {
    document
        .querySelectorAll('.js-cat-zone')
        .forEach(el => {
            el.addEventListener('touchstart', playMur);
            el.addEventListener('touchmove', playMur);
            el.addEventListener('mousedown', playMur);
        });
});


function playMur() {
    if (flag) return;
    flag = true;

    const randomSound = murs[Math.floor(Math.random() * murs.length)];
    randomSound.addEventListener('ended', () => { flag = false; });
    randomSound.play();
}
