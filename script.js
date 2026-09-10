// ===========================
// Ждём загрузки DOM
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    initYear();
    initMoreButton();
    initSocialLinks();
    logWelcome();
});

// ===========================
// 1. Автоматический год в подвале
// ===========================
function initYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
}

// ===========================
// 2. Кнопка "Узнать больше"
// ===========================
function initMoreButton() {
    const btn = document.getElementById('moreBtn');
    const extraInfo = document.getElementById('extraInfo');

    if (!btn || !extraInfo) return;

    btn.addEventListener('click', () => {
        // Показываем скрытую секцию
        extraInfo.classList.remove('hidden');
        extraInfo.classList.add('fade-in');

        // Обновляем время
        updateTime();

        // Меняем текст кнопки
        btn.textContent = 'Скрыть';
        btn.dataset.expanded = 'true';

        // Плавная прокрутка к секции
        extraInfo.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    // Дополнительно: повторный клик скрывает
    btn.addEventListener('click', () => {
        if (btn.dataset.expanded === 'true' && btn.textContent === 'Скрыть') {
            // Ничего не делаем, логика ниже
        }
    });
}

// ===========================
// 3. Обновление времени
// ===========================
function updateTime() {
    const timeEl = document.getElementById('currentTime');
    if (timeEl) {
        const now = new Date();
        timeEl.textContent = now.toLocaleString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }
}

// ===========================
// 4. Обработка кликов по соцсетям
// ===========================
function initSocialLinks() {
    const links = document.querySelectorAll('.social-link');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const name = link.textContent.trim();
            console.log(`Клик по ссылке: ${name}`);
            alert(`Вы кликнули на ${name}. Здесь могла бы быть ссылка на профиль.`);
        });
    });
}

// ===========================
// 5. Приветствие в консоли
// ===========================
function logWelcome() {
    console.log('%c✨ Простая страница загружена!', 'color: #667eea; font-size: 16px; font-weight: bold;');
    console.log('%cЕсли вы это видите — JavaScript работает корректно.', 'color: #764ba2;');
}