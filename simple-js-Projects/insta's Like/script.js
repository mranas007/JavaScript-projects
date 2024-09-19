let containerArea = document.querySelectorAll('.card');


containerArea.forEach(card  => {
    card.addEventListener('dblclick', () => {
        let like = card.querySelector("i");
        like.style.opacity = '0.7';
        like.style.transform = 'translate(-50%, -50%) scale(2)';
        setTimeout(() => {
            like.style.opacity = '0';
            like.style.transform = 'translate(-50%, -50%) scale(1.5)';
        }, 1200);

    });
});
