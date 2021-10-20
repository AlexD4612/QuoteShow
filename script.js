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

const author = document.querySelector("p.author");
// emoji
const emoji = document.querySelector("p");
// background
const bgImage = document.querySelector("body");

bgImage.style.backgroundImage = "url(/assets/mountain.jpg)";

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

// listen for clicks on next button
nextButton.addEventListener("click", function () {
	// update, then increase item number with each click
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
});

// listen for clicks on previous button
prevButton.addEventListener("click", function () {
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
});

// listen for clicks on random button
randButton.addEventListener("click", function () {
	// generate random number, for total number, of items (data)
	randomNumber = Math.floor(Math.random() * data.length);

	// display data based random number
	quote.innerHTML = data[randomNumber].quote;
	emoji.innerHTML = data[randomNumber].emoji;
	bgImage.style.backgroundImage = data[randomNumber].image;
});

// listen for keypress next
document.addEventListener("keyup", function () {
	if (event.keyCode === 39) {
		// update, then increase item number with each click
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
	}

	if (event.keyCode === 37) {
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
	}

	//spacebar
	if (event.keyCode === 32) {
		// generate random number, for total number, of items (data)
		randomNumber = Math.floor(Math.random() * data.length);

		// display data based random number
		quote.innerHTML = data[randomNumber].quote;
		emoji.innerHTML = data[randomNumber].emoji;
		bgImage.style.backgroundImage = data[randomNumber].image;
		var audio = document.getElementById("audio");
		audio.src=data[randomNumber].audio;
        audio.play();
	}
	
});


