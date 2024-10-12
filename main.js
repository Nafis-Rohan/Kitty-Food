const menu = document.querySelector('nav ul');
        const openMenuBtn = document.querySelector('.menu-open');
        const closeMenuBtn = document.querySelector('.menu-close');

        openMenuBtn.addEventListener('click', () => {
            menu.classList.add('open');
        });
        closeMenuBtn.addEventListener('click', () => {
            menu.classList.remove('open');
        });