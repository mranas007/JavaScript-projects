

window.addEventListener('keydown', (e) => {
   let buttons = document.querySelector(`div[data-key="${e.keyCode}"]`);
   if (!buttons) return;
   buttons.classList.add('myhover')
   setTimeout(() => {
      buttons.classList.remove('myhover')
   }, 100);

   let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   if (!audio) return;
   audio.currentTime = 0
   audio.play()
});

// window.addEventListener('click', function () {
//    let windowWidth = window.innerWidth;
//    if (windowWidth <= 600) {
//       let keyboard = document.querySelectorAll('.keys');
//       keyboard.forEach((keypressed) => {
//          if (keypressed) {
//             keypressed.focus();
//          }
//       })
//    }
// });