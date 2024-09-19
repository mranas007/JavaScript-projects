const date = new Date();


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

document.querySelector("#month-title").innerHTML = months[date.getMonth()];
document.querySelector("#mm-dd-yyyy").innerHTML = date.toDateString();

const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// All monthe Container 
let days = "";

// last previous days 
const prevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
date.setDate(1)
const prevDate = date.getDay();
for (let x = prevDate; x > 0; x--) {
    days += `<div class="day blurMonth"> ${prevMonth - x + 1} </div>`;
}

// All days in Months 
for (let i = 1; i <= lastDate; i++) {
    if (i === new Date().getDate()) {
        days += `<div class="day today">${i}</div>`
    } else {
        days += `<div class="day">${i}</div>`
    }
};

const nextLastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()
nextDays = 7 - nextLastDate - 1
for (let n = 1; n <= nextDays; n++) {
    days += `<div class="day blurMonth">${n}</div>`
}

// to Showing the Calender Date 
const calendar = document.querySelector('#calendar');
calendar.innerHTML = days

