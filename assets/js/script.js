const play = document.getElementById('play'),
    videoPlayer = document.querySelector('.videoPlayer'),
    video = videoPlayer.children[0],
    purview = document.getElementById('purview'),
    pause = document.getElementById('pause');
play.onclick = () => {
    videoPlayer.classList.add("active");
    purview.pause();
    video.play();
}

pause.onclick = () => {
    purview.play();
    videoPlayer.classList.remove('active');
    video.pause();
}

window.onscroll = () => {
    document.querySelector(".onMove img").style.transform = `rotate(${document.body.scrollTop / 2}deg)`;
}

var wow = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        callback: function (box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wow.init();

// clock
const NUMBERS = [
    // 0
    [
        [0, 0, 1, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 0, 1, 1, 0],
        [0, 0, 1, 1, 1, 0, 0]
    ],
    // 1
    [
        [0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [1, 1, 1, 1, 1, 1, 1]
    ],
    // 2
    [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1],
    ],
    // 3
    [
        [1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
    ],
    // 4
    [
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 0],
        [0, 0, 1, 1, 1, 1, 0],
        [0, 1, 1, 0, 1, 1, 0],
        [1, 1, 0, 0, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 1]
    ],
    //5
    [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 0],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
    ],
    // 6
    [
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0],
        [1, 1, 0, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
    ],
    // 7
    [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0]
    ],
    // 8
    [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 1, 1, 0]
    ],
    // 9
    [
        [0, 1, 1, 1, 1, 1, 0],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0]
    ],
    // :
    [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0]
    ]
];

window.exploads = [];

const updateNumber = (element, index) => {
    let ex = element.getAttribute('expload');
    let expload = ex ? document.querySelector(`.expload:nth-child(${ex})`) : null;
    if (expload && window.exploads[`ex${ex}`] != index) {
        expload.style.left = element.offsetLeft + "px";
        expload.style.top = element.offsetTop + "px";
        expload.classList.add("active");
    }
    let number = NUMBERS[index];
    for (let i = 0; i < number.length; i++) {
        for (let x = 0; x < number[i].length; x++) {
            if (number[i][x] == 1)
                element.children[i * number[i].length + x].classList.add("active");
            else
                element.children[i * number[i].length + x].classList.remove("active");
        }
    }
    setTimeout(() => {
        if (expload) {
            expload.classList.remove("active");
            window.exploads[`ex${ex}`] = index;
        }
    }, 500);
}
let clock = document.querySelector(".clock");
Array.from(clock.children).forEach(element => {
    for (let i = 0; i < 10; i++) {
        for (let x = 0; x < 7; x++) {
            element.insertAdjacentHTML('beforeend', `<b></b>`);
        }
    }
    if (element.id != "dot") {
        updateNumber(element, 0);
    } else {
        updateNumber(element, 10);
    }
});

setInterval(() => {
    const now = new Date().getTime(), timeRemaining = new Date("2024-09-10") - now;
    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)).toString(),
        hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString(),
        minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)).toString(),
        seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000).toString();
    hours = hours.split("");
    minutes = minutes.split("");
    seconds = seconds.split("");

    if (hours.length == 1) hours.unshift(0);
    if (minutes.length == 1) minutes.unshift(0);
    if (seconds.length == 1) seconds.unshift(0);

    updateNumber(document.querySelector(`.clock #hour1`), hours[0]);
    updateNumber(document.querySelector(`.clock #hour2`), hours[1]);
    updateNumber(document.querySelector(`.clock #minute1`), minutes[0]);
    updateNumber(document.querySelector(`.clock #minute2`), minutes[1]);
    updateNumber(document.querySelector(`.clock #second1`), seconds[0]);
    updateNumber(document.querySelector(`.clock #second2`), seconds[1]);
    document.querySelector("section.lyon2024 strong b").innerHTML = days;
}, 1000);

let colors = ["pink", 'blue', 'red', 'purple', 'orange', 'green']

let exploads = document.querySelectorAll('.expload');
exploads.forEach(expload => {
    for (let i = 0; i < 70; i++) {
        let color = colors[Math.floor(Math.random() * colors.length)];
        let speed = Math.floor(Math.random() * 6) + 5;
        expload.insertAdjacentHTML('beforeend', `<b style='background-color: ${color}; animation-duration: 0.${speed}s'></b>`);
    }
})