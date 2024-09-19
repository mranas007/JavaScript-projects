let istatus = document.querySelector('h5');
let addFriend = document.querySelector('.add');
let check = 0;
addFriend.addEventListener('click', () => {
    if (check == 0) {
        istatus.innerHTML = 'Friend'
        istatus.style.color = 'green'
        addFriend.innerHTML= "Remove"
        addFriend.style.backgroundColor = '#dadada'
        addFriend.style.color = '#111'
        check = 1
    } else {
        istatus.innerHTML = 'Unkwon'
        istatus.style.color = 'rebeccapurple'
        addFriend.innerHTML= "Add Friend"
        addFriend.style.backgroundColor = 'cornflowerblue'
        addFriend.style.color = '#fff'
        check = 0
    }
});
