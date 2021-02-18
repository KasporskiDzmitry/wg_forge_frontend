import {OrderTable} from "./OrderTable";

export const Main = () => {
    window.addEventListener('scroll', () => {
        let percent = Math.floor((window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100)

        if (percent > 1) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    window.scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = `
        <div class="scrollToTopButton" onclick="scrollToTop()">
            <i class="bi bi-arrow-up-circle-fill"></i>
        </div>
    `;

    const scrollToTopButton = container.querySelector('.scrollToTopButton');

    container.prepend(OrderTable());

    return container;
};