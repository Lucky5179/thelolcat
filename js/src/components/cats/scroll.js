import interact from 'interactjs';
import gsap from 'gsap';


/**
 * Глобальное значение скролла
 */
let globalY = 0;

/**
 * Контейнеры
 */
const container = document.querySelector('.js-scroll-container');
const cat1 = container.querySelector('.js-cat');

/**
 * Высота блока с котом и высота всей сцены
 * (в нашем конкретном случае высота котов одинаковая,
 * поэтому она будет равна высота кота * 2),
 * определяем позже
 */
let catHeight, sceneHeight;

/**
 * Нужен дубликат блока с котом,
 * чтобы сделать бесконечный скролл
 */
const cat2 = cat1.cloneNode(true);
cat2.classList.remove('cat--1');
cat2.classList.add('cat--2');
container.appendChild(cat2);

/**
 * Параллакс
 */
const parallax10 = cat1.querySelector('.js-cat-parallax-0');
const parallax11 = cat1.querySelector('.js-cat-parallax-1');
const parallax12 = cat1.querySelector('.js-cat-parallax-2');
const parallax20 = cat2.querySelector('.js-cat-parallax-0');
const parallax21 = cat2.querySelector('.js-cat-parallax-1');
const parallax22 = cat2.querySelector('.js-cat-parallax-2');
const parallaxDelta0 = 0.1;
const parallaxDelta1 = 0.25;
const parallaxDelta2 = 0.6;



/**
 * Высота блоков с котами зависит от количества текста
 * и ширины экранов, поэтому получаем её заново
 * при ресайзе и когда страница загрузилась
 */
{
    const updateHeight = () => {
        catHeight = cat1.offsetHeight;
        sceneHeight = catHeight * 2;
        moveCats();
    };

    updateHeight();

    window.addEventListener('resize', updateHeight);
    window.addEventListener('load', updateHeight);
}



/**
 * Привязываем драг
 */
interact(container).draggable({
    inertia: true,
    listeners: {
        move(event) {
            globalY -= event.dy * 1; // Коэф-т отставания скролла от пальца
            moveCats();
            changeColor();
        }
    }
});



/**
 * Двигаем котов
 */
function moveCats() {
    /**
     * offset — смещение в пикселях (>0 — вверх, <0 — вниз)
     * границ topLimit и bottomLimit, за пределами которых
     * блоки с котом будет перемещаться на другую позицию.
     */
    const offset = 50;

    // Кот 1
    {
        const topLimit = (catHeight + offset) * -1;
        const bottomLimit = topLimit + sceneHeight;
        let localY = globalY % sceneHeight * -1;

        /**
         * Поправки для правильной закольцованности
         * в обоих направлениях
         */
        if (globalY >= 0) {
            if (localY < topLimit) {
                localY = localY + sceneHeight;
            }
        }

        if (globalY < 0) {
            if (localY > bottomLimit) {
                localY = localY - sceneHeight;
            }
        }

        gsap.to(cat1, {
            duration: 0,
            y: localY
        });


        /**
         * Параллакс внутри кота
         */
        gsap.to(parallax10, {
            duration: 0,
            y: localY * parallaxDelta0
        });

        gsap.to(parallax11, {
            duration: 0,
            y: localY * parallaxDelta1
        });

        gsap.to(parallax12, {
            duration: 0,
            y: localY * parallaxDelta2
        });
    }

    // Кот 2
    {
        const topLimit = (catHeight + offset) * -1 - catHeight;
        const bottomLimit = topLimit + sceneHeight;
        let localY = globalY % sceneHeight * -1;

        if (localY > offset * -1) {
            localY = localY - sceneHeight;
        }

        if (globalY >= 0) {
            if (localY < topLimit) {
                localY = localY + sceneHeight;
            }
        }

        if (globalY < 0) {
            if (localY > bottomLimit) {
                localY = localY - sceneHeight;
            }
        }

        gsap.to(cat2, {
            duration: 0,
            y: localY + catHeight
        });


        /**
         * Параллакс внутри кота
         */
        gsap.to(parallax20, {
            duration: 0,
            y: (localY + catHeight) * parallaxDelta0
        });

        gsap.to(parallax21, {
            duration: 0,
            y: (localY + catHeight) * parallaxDelta1
        });

        gsap.to(parallax22, {
            duration: 0,
            y: (localY + catHeight) * parallaxDelta2
        });
    }
}

moveCats();



/**
 * Меняем цвет фона (вращаем по hsl-кругу)
 */
function changeColor() {
    const x = globalY / 360 * 0.025;
    // hsl(104, 73%, 48%) — наш зелёный
    const hue = `hsl(${(x * 360 + 15) % 360}, 100%, 52%)`;

    gsap.to(App.H, {
        duration: 0,
        '--color-disco': hue
    });
}
