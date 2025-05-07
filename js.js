const body = document.querySelector('body');

const apple = document.createElement('img');
apple.src = 'Apple.jpg'

const banana = document.createElement('img');
banana.src = 'Banana.jpg'

const chesee = document.createElement('img');
chesee.src = 'Chesee.jpg'

const sendwich = document.createElement('img');
sendwich.src = 'Sendwich.jpg'

const question = document.createElement('img');
question.src = 'question.jpg'



const imgArr = [apple, banana, chesee, sendwich];


const table = document.createElement('table')
let imgIndex = 0;
for (let i = 0; i < 5; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 5; j++) {
        const td = document.createElement('td');
        const img = document.createElement('img');
        if (imgIndex == imgArr.length) {
            imgIndex = 0;
        }

        img.src = imgArr[imgIndex].src;
        imgIndex++;
        td.appendChild(img);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

body.appendChild(table);

const button = document.createElement('button');
body.appendChild(button)
button.textContent = "Press for random"




function showRandom() {

    const allImages = document.querySelectorAll('table img');


    const srcs = [];
    for (let i = 0; i < allImages.length; i++) {
        srcs[i] = allImages[i].src;
    }


    for (let i = srcs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = srcs[i];
        srcs[i] = srcs[j];
        srcs[j] = temp;
    }


    for (let i = 0; i < allImages.length; i++) {
        allImages[i].src = srcs[i];
    }
}

document.querySelector("button").addEventListener("click", showRandom);


const hideButton = document.createElement('button');
hideButton.textContent = "Start guessing";
hideButton.style.margin = '10px';
body.appendChild(hideButton);


let savedSrcs = [];


hideButton.addEventListener("click", function () {
    const allImages = document.querySelectorAll('table img');


    if (allImages[0].src == question.src) {
        return;
    }

    savedSrcs = [];
    for (let i = 0; i < allImages.length; i++) {
        savedSrcs[i] = allImages[i].src;
        allImages[i].src = question.src;
    }
});

const showButton = document.createElement('button');
showButton.textContent = "Show images";
body.appendChild(showButton);

showButton.addEventListener("click", function () {
    const allImages = document.querySelectorAll('table img');
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].src = savedSrcs[i];
    }
});



let firstCard = null;
let secondCard = null;

const allImages = document.querySelectorAll('table img');


for (let i = 0; i < allImages.length; i++) {
    allImages[i].addEventListener("click", function () {

        if (allImages[i].src != question.src) return;

        allImages[i].src = savedSrcs[i];

        if (firstCard == null) {
            firstCard = i;
        } else {
            secondCard = i;


            if (savedSrcs[firstCard] == savedSrcs[secondCard]) {

                firstCard = null;
                secondCard = null;
            } else {

                allImages[firstCard].src = question.src;
                allImages[secondCard].src = question.src;
                firstCard = null;
                secondCard = null;
            }
        }
    });
}

