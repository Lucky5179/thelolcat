/**
 * При клике на логотип возвращаемся на сплэшскрин
 */
document.querySelector('.js-logo').addEventListener('click', e => {
    e.preventDefault();
    App.H.classList.remove('_has-open-simulator');
    document.querySelector('.js-toggle-simulator').checked = true;
    document.querySelector('.js-splashscreen').classList.remove('_is-hidden');
});


/**
 * Открываем/закрыаем шеринг в хедере
 */
document.querySelector('.js-header-share-btn').addEventListener('click', () => {
    document.querySelector('.js-header-share').classList.toggle('_is-visible');
});
