/* Data to Show*/
const data = [{
        quote: `“There are two means of refuge from the misery of life — music and cats.”`,
        emoji: "🎵",
        image: `url(assets/cat3.png)`,
        author: `Albert Schweitzer`,
        audio: "assets/cat1.mp3"
    },
    {
        quote: `“The smallest feline is a masterpiece.”`,
        emoji: "🐱",
        image: `url(assets/cat2.jpg)`,
        author: `Leonardo da Vinci`,
        audio: "assets/Cat2.mp3"
    },
    {
        quote: `“Dogs own space and cats own time.”`,
        emoji: "🕓",
        image: `url(assets/cat4.png)`,
        author: `Nicola Griffith`,
        audio: "assets/cat10.wav"
    },
    {
        quote: `“Like all pure creatures, cats are practical.”`,
        emoji: "🐈",
        image: `url(assets/cat6.jpg)`,
        author: `William S. Burroughs`,
        audio: "assets/cat9.wav"

    },
    {
        quote: `“Sleeping, it’s what cats do best. It’s why they are my heroes.”`,
        emoji: "💤",
        image: `url(assets/cat5.png)`,
        author: `Jarod Kintz`,
        audio: "assets/cat5.wav"
    }
];

/*
Quote and Emoji
*/
// blockquote
const quote = document.querySelector("blockquote");

const author = document.querySelector("span.author");
// emoji
const emoji = document.querySelector("p");
// background
const bgImage = document.querySelector("body");

bgImage.style.backgroundImage = "url(/assets/cat1.jpg)";

/*
 * Navigate to Items with Event Listeners
 * Track Number of Items
 */
// initialize item number
let itemNumber = 0;
// get next button
const nextButton = document.querySelector("img.next");
// get previous button
const prevButton = document.querySelector("img.prev");
// get random button
const randButton = document.querySelector("img.random");


function nextItem() {
    // load in button styling
    document.querySelector('img.next').src = "assets/next.svg";
    document.querySelector('img.next').alt = "next button";
    document.querySelector('img.prev').src = "assets/prev.svg";
    document.querySelector('img.prev').alt = "previous button";
    document.querySelector('img.random').src = "assets/random.svg";


    itemNumber += 1;

    // if at LAST item
    if (itemNumber > data.length - 1) {
        // reset counting to first item
        itemNumber = 0;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
    author.innerHTML = "- " + data[itemNumber].author;
    audio.src = data[itemNumber].audio;
    audio.play();
}

function prevItem() {
    // load in button styling
    document.querySelector('img.next').src = "assets/next.svg";
    document.querySelector('img.prev').src = "assets/prev.svg";
    document.querySelector('img.random').src = "assets/random.svg";

    // update, then DEcrease item number with each click
    itemNumber -= 1;

    // if at FIRST item
    if (itemNumber < 0) {
        // reset counting to last item
        itemNumber = data.length - 1;
    }

    // display data based on array index
    quote.innerHTML = data[itemNumber].quote;
    emoji.innerHTML = data[itemNumber].emoji;
    bgImage.style.backgroundImage = data[itemNumber].image;
    author.innerHTML = "- " + data[itemNumber].author;
    audio.src = data[itemNumber].audio;
    audio.play();
}

function randItem() {
    // load in button styling
    document.querySelector('img.next').src = "assets/next.svg";
    document.querySelector('img.prev').src = "assets/prev.svg";
    document.querySelector('img.random').src = "assets/random.svg";

    // generate random number, for total number, of items (data)
    randomNumber = Math.floor(Math.random() * data.length);

    // display data based random number
    quote.innerHTML = data[randomNumber].quote;
    emoji.innerHTML = data[randomNumber].emoji;
    bgImage.style.backgroundImage = data[randomNumber].image;
    author.innerHTML = "- " + data[randomNumber].author;
    audio.src = data[randomNumber].audio;
    audio.play();
}
// listen for clicks on next button
nextButton.addEventListener("click", nextItem);

// listen for clicks on previous button
prevButton.addEventListener("click", prevItem);

// listen for clicks on random button
randButton.addEventListener("click", randItem);

// listen for keypress next
document.addEventListener("keyup", function() {
    if (event.keyCode === 39) {
        nextItem();
    }

    if (event.keyCode === 37) {
        prevItem();
    }

    //spacebar
    if (event.keyCode === 32) {
        randItem();
    }

});