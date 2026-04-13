/**
 * Глобальная переменная App
 */
const App = window.App = {
    mobile: false,
    H: document.getElementsByTagName('html')[0]
};

/**
 * Определяем тач-устройство
 */
if ('ontouchstart' in window) {
    App.mobile = true;
    App.H.classList.add('mobile');
} else {
    App.H.classList.add('desktop');
}
