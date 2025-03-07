document.addEventListener('DOMContentLoaded', () => {
    const candyContainer = document.querySelector('.candy-container'); // Находим контейнер для изображений

    if (!candyContainer) {
        console.error('Контейнер для изображений не найден.');
        return;
    }

    const imagesData = [
        { left: 10, top: 10, width: 6, angle: 15, alt: 'Конфета 1' },   // Первое изображение
        { left: 30, top: 20, width: 7, angle: -10, alt: 'Конфета 2' },  // Второе изображение
        { left: 50, top: 15, width: 4, angle: 30, alt: 'Конфета 3' },    // Третье изображение
        { left: 70, top: 25, width: 6, angle: -20, alt: 'Конфета 4' },   // Четвёртое изображение
        { left: 90, top: 90, width: 5, angle: 95, alt: 'Конфета 5' },    // Пятое изображение
        { left: 20, top: 90, width: 4, angle: -15, alt: 'Конфета 6' },   // Шестое изображение
        { left: 40, top: 50, width: 7, angle: 10, alt: 'Конфета 7' },   // Седьмое изображение
        { left: 60, top: 90, width: 5, angle: -70, alt: 'Конфета 8' },   // Восьмое изображение
        { left: 80, top: 55, width: 6, angle: 20, alt: 'Конфета 9' },    // Девятое изображение
        { left: 10, top: 70, width: 4, angle: -45, alt: 'Конфета 10' },   // Десятое изображение
    ];

    // Функция для проверки, является ли устройство мобильным
    const isMobile = () => window.innerWidth < 768 || 'ontouchstart' in window;

    // Функция для создания и добавления изображений
    const createCandyImages = () => {
        // Очищаем контейнер перед добавлением новых изображений
        candyContainer.innerHTML = '';

        imagesData.forEach(data => {
            const img = document.createElement('img');
            img.src = 'assets/images/candy.svg';
            img.classList.add('candy-image'); // Добавляем CSS-класс
            img.alt = data.alt; // Добавляем атрибут alt

            // Устанавливаем стили
            img.style.left = `${data.left}%`;
            img.style.top = `${data.top}%`;
            img.style.width = `${isMobile() ? data.width * 2.5 : data.width}%`;
            img.style.transform = `rotate(${data.angle}deg)`;

            candyContainer.appendChild(img);
        });
    };

    // Создаем изображения при загрузке страницы
    createCandyImages();

    // Обновляем изображения при изменении размера окна
    window.addEventListener('resize', createCandyImages);
});