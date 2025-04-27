const entries = [
    `
    <h1>Hello, Stubborn Seed Las Vegas!</h1>
    <p><em>March 26, 2025, 10:25 PM - Food, Las Vegas</em></p>
    <p>I usually don't go to restaurants on the Las Vegas Strip because of the relatively higher prices...but I decided to make an exception to check out <a href="#">Stubborn Seed</a>.</p>
    <p>I opted to get the chef's tasting menu at $135.00 per person...</p>
    <img src="YOUR_IMAGE.png" alt="Stubborn Seed" style="width:100%; border-radius:10px; margin-top:20px;">
    `,

    `
    <h1>Day 2: Exploring More!</h1>
    <p><em>March 27, 2025</em></p>
    <p>Today I walked all around the strip and explored... so much to see and do!</p>
    `,

    `
    <h1>Day 3: Final Reflections</h1>
    <p><em>March 28, 2025</em></p>
    <p>What a great trip. The food, the views, the people — absolutely unforgettable.</p>
    `
];

let currentIndex = 0;
const journal = document.getElementById('journal-entry');

function showEntry(index) {
    journal.classList.add('fade-out');
    setTimeout(() => {
        journal.innerHTML = entries[index];
        journal.classList.remove('fade-out');
    }, 500);
}

function nextEntry() {
    if (currentIndex < entries.length - 1) {
        currentIndex++;
        showEntry(currentIndex);
    }
}

function previousEntry() {
    if (currentIndex > 0) {
        currentIndex--;
        showEntry(currentIndex);
    }
}

// Initial load
showEntry(currentIndex);

