/* Data to Show*/
const data = [
	{
		quote: `“Be like a mountain.”`,
		emoji: "🐈",
		image: `url(assets/cat1.jpg)`,
		author: `Adam`,
		audio: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
	},
	{
		quote: `“Brave the oceans.”`,
		emoji: "🐱",
		image: `url(assets/ocean.jpg)`,
		author: `Eve`,
		audio: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
	},
	{
		quote: `“Grow like a tree.”`,
		emoji: "🌲",
		image: `url(assets/tree.jpg)`,
		author: `Bob`,
		audio: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
	},
	{
		quote: `“This is a fire”`,
		emoji: "👌",
		image: `url(assets/forest.jpg)`,
		author: `Jim`,
		audio: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
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


function nextItem(){
	
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
	author.innerHTML ="- "+ data[itemNumber].author;
	audio.src=data[itemNumber].audio;
        audio.play();
}

function prevItem(){

	
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
audio.src=data[itemNumber].audio;
	audio.play();
}

function randItem(){
// load in button styling
	document.querySelector('img.next').src="assets/next.svg";
	document.querySelector('img.prev').src="assets/prev.svg";
	document.querySelector('img.random').src="assets/random.svg";

// generate random number, for total number, of items (data)
randomNumber = Math.floor(Math.random() * data.length);

// display data based random number
quote.innerHTML = data[randomNumber].quote;
emoji.innerHTML = data[randomNumber].emoji;
bgImage.style.backgroundImage = data[randomNumber].image;
author.innerHTML = "- "+data[randomNumber].author;
audio.src=data[randomNumber].audio;
	audio.play();
}
// listen for clicks on next button
nextButton.addEventListener("click", nextItem);

// listen for clicks on previous button
prevButton.addEventListener("click", prevItem);

// listen for clicks on random button
randButton.addEventListener("click", randItem);

// listen for keypress next
document.addEventListener("keyup", function () {
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


