let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
    let date = new Date();
    let hourTime = date.getHours();
    let mTime = date.getMinutes();
    let sTime = date.getSeconds();

    let hrotate = 30 * hourTime + mTime / 2;
    let mrotate = 6 * mTime;
    let srotate = 6 * sTime;

    hour.style.transform = `rotate(${hrotate}deg)`;
    min.style.transform = `rotate(${mrotate}deg)`;
    sec.style.transform = `rotate(${srotate}deg)`;
}, 1000);