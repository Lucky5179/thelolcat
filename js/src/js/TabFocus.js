/**
 *  Убираем видимое состояние фокуса до тех пор,
 *  пока не нажмётся клавиша TAB
 *
 *  В CSS:
 *  html._has-no-visible-focus * {
 *    outline: 0 !important;
 *  }
 */

if (!App.mobile) {
    App.H.classList.add('_has-no-visible-focus');
    window.addEventListener('keydown', listener);
}

function listener(event) {
    if (event.code === 'Tab') {
        App.H.classList.remove('_has-no-visible-focus');
        window.removeEventListener('keydown', listener);
    }
}
