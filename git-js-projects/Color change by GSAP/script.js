let rect = document.querySelector('.box');

rect.addEventListener('mousemove', (details) => {
    let areaOfRect = rect.getBoundingClientRect();
    let reactInsideArea = Math.floor(details.x - rect.getBoundingClientRect().x)
    if (reactInsideArea < areaOfRect.width / 2) {
        let leftColor = Math.floor(gsap.utils.mapRange(0, 300, 255, 0, reactInsideArea))
        rect.style.backgroundColor = `rgb( ${leftColor}, 0, 0)`;
        console.log(rightColor);
    } else {
        let rightColor = Math.floor(gsap.utils.mapRange(300, 600, 0, 255, reactInsideArea))
        rect.style.backgroundColor = `rgb( 0, 0, ${rightColor})`
        console.log(rightColor);
    }
})

rect.addEventListener('mouseleave', (details) => {
    rect.style.backgroundColor = "white"
});