/**
 * Для того, чтобы начали воспоизводиться звуки на iOS,
 * пользователь обязательно должен нажать куда-нибудь,
 * поэтому заставляем его нажать на кнопку «Start»
 */
export const pushed = new Promise((resolve) => {
    document
        .querySelector('.js-start')
        .addEventListener('click', () => {
            document.querySelector('.js-splashscreen').classList.add('_is-hidden');
            resolve();
        });
});


/**
 * Открываем/закрываем шеринг
 */
document.querySelector('.js-splashscreen-share-btn').addEventListener('click', () => {
    document.querySelector('.js-splashscreen-share').classList.toggle('_is-visible');
});
