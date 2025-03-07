document.addEventListener('DOMContentLoaded', () => {
    const candyContainer = document.querySelector('.candy-container'); // Находим контейнер для изображений

    if (candyContainer) {
        const imagesData = [
            { left: 10, top: 10, width: 6, angle: 15 },   // Первое изображение
            { left: 30, top: 20, width: 7, angle: -10 },  // Второе изображение
            { left: 50, top: 15, width: 4, angle: 30 },    // Третье изображение
            { left: 70, top: 25, width: 6, angle: -20 },   // Четвёртое изображение
            { left: 90, top: 90, width: 5, angle: 95 },    // Пятое изображение
            { left: 20, top: 90, width: 4, angle: -15 },   // Шестое изображение
            { left: 40, top: 50, width: 7, angle: 10 },   // Седьмое изображение
            { left: 60, top: 90, width: 5, angle: -70 },   // Восьмое изображение
            { left: 80, top: 55, width: 6, angle: 20 },    // Девятое изображение
            { left: 10, top: 70, width: 4, angle: -45 },   // Десятое изображение
        ];

        // Проверяем, является ли устройство мобильным (например, ширина экрана меньше 768px)
        const isMobile = window.innerWidth < 768;

        imagesData.forEach(data => {
            const img = document.createElement('img');
            img.src = 'assets/images/candy.svg';
            img.style.position = 'absolute';
            img.style.left = `${data.left}%`;
            img.style.top = `${data.top}%`;
            
            // Увеличиваем ширину в два раза для мобильных устройств
            img.style.width = `${isMobile ? data.width * 2.5 : data.width}%`;
            
            img.style.transform = `rotate(${data.angle}deg)`;
            candyContainer.appendChild(img);
        });
    } else {
        console.error('Контейнер для изображений не найден.');
    }
});