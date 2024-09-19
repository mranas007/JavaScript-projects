// hovering on navbar 

window.onload = function () {
    if (window.innerWidth > 800) {
        const active = document.querySelector('#forActive');
        const element = document.querySelectorAll('.navLi');

        element.forEach((elem) => {
            elem.addEventListener('mouseover', () => {
                if (elem == element[0]) {
                    active.style.left = "0"
                    active.style.opacity = '1'
                } else if (elem == element[1]) {
                    active.style.opacity = '1'
                    active.style.left = "26%"
                } else if (elem == element[2]) {
                    active.style.opacity = '1'
                    active.style.left = "52.5%"
                } else if (elem == element[3]) {
                    active.style.opacity = '1'
                    active.style.left = "78.5%"
                }
            });
        });

        element.forEach((elem) => {
            elem.addEventListener('mouseleave', () => {
                active.style.opacity = '0'
            });
        });
    }
};

