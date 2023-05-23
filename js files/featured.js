// Data for the cards
const cardsData = [
  {
    imageSrc: '/assets/Featured/trainer1.png',
    title: 'Yochai Benkler',
    subtitle: 'GMM Bodybuilding Competition Winner of 2019',
    description:
      'This is the description for Card 1. Lorem Ipsum is simply dummy text of the printing and typesetting.',
  },
  {
    imageSrc: '/assets/Featured/Trainer 2.png',
    title: 'Loki Herman',
    subtitle: 'London Weight Lifting Championship Winner of 2017',
    description:
      'This is the description for Card 2. Lorem Ipsum is simply dummy text of the printing and typesetting.',
  },
  {
    imageSrc: '/assets/Featured/trainer 3.png',
    title: 'Ryan Merkley',
    subtitle: 'Warsaw Weight Lifting Championship Winner of 2017',
    description:
      'This is the description for Card 3. Lorem Ipsum is simply dummy text of the printing and typesetting.',
  },
  {
    imageSrc: '/assets/Featured/trainer 4.png',
    title: 'Kilnam Chon',
    subtitle: 'Korea Weight Lifting Championship Winner of 2017',
    description:
      'This is the description for Card 4. Lorem Ipsum is simply dummy text of the printing and typesetting.',
  },
  {
    imageSrc: '/assets/Featured/trainer 5.png',
    title: 'Robert Jules',
    subtitle: 'Germany Weight Lifting Championship Winner of 2017',
    description:
      'This is the description for Card 1. Lorem Ipsum is simply dummy text of the printing and typesetting.',
  },
  {
    imageSrc: '/assets/Featured/trainer 6.png',
    title: 'James Havard',
    subtitle: 'Singapore Weight Lifting Championship Winner of 2017',
    description:
      'This is the description for Card 1. Lorem Ipsum is simply dummy text of the printing and typesetting.',
  },
];

// Get the container element to hold the cards
const container = document.getElementById('card-container');

// Set the number of cards to show initially and the increment value
const cardsToShowInitially = 3;
const cardsToShowIncrement = 3;

// Function to create and append the cards
function createAndAppendCards(startIndex, endIndex) {
  for (let i = startIndex; i < endIndex; i += 1) {
    const card = cardsData[i];

    // // Append the card to the container
    // container.appendChild(cardElement);
    const cardMainElement = document.createElement('div');
    cardMainElement.classList.add('card-main');
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    const imageElement = document.createElement('img');
    imageElement.src = card.imageSrc;
    const contentWrapper = document.createElement('div'); // Create a new div container
    contentWrapper.classList.add('content-wrapper'); // Add a class to the container
    const titleElement = document.createElement('h1');
    titleElement.textContent = card.title;
    const subtitleElement = document.createElement('h3');
    subtitleElement.textContent = card.subtitle;
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = card.description;

    // Append the elements to the content wrapper
    contentWrapper.appendChild(titleElement);
    contentWrapper.appendChild(subtitleElement);
    contentWrapper.appendChild(descriptionElement);

    // Append the image and content wrapper to the card container
    cardElement.appendChild(imageElement);
    cardElement.appendChild(contentWrapper);
    cardMainElement.appendChild(cardElement);

    // Append the card to the container
    container.appendChild(cardMainElement);
  }
}

// Create and append the initial set of cards
createAndAppendCards(0, cardsToShowInitially);

let seeMoreButton; // Declare seeMoreButton outside of the functions

// Function to handle the 'See More' button click
function handleSeeMoreClick() {
  // Remove the 'See More' button
  container.removeChild(seeMoreButton);

  // Calculate the next set of cards to show
  const currentCardCount = container.getElementsByClassName('card').length;
  const nextCardsToShow = currentCardCount + cardsToShowIncrement;

  // Create and append the remaining cards
  createAndAppendCards(currentCardCount, nextCardsToShow);

  // Check if there are more cards to show
  if (nextCardsToShow < cardsData.length) {
    // Create the 'See More' button again
    seeMoreButton = document.createElement('button');
    seeMoreButton.textContent = 'See More';
    container.appendChild(seeMoreButton);

    // Add event listener for the 'See More' button click
    seeMoreButton.addEventListener('click', handleSeeMoreClick);
  }
}

// Check if there are more cards to show
if (cardsData.length > cardsToShowInitially) {
  const viewportWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0,
  );

  if (viewportWidth <= 768) {
    // Create the 'See More' button
    seeMoreButton = document.createElement('button');
    seeMoreButton.textContent = 'See More';
    container.appendChild(seeMoreButton);

    // Add event listener for the 'See More' button click
    seeMoreButton.addEventListener('click', handleSeeMoreClick);
  } else {
    // Create and append the remaining cards
    createAndAppendCards(cardsToShowInitially, cardsData.length);
  }
}

// Function to check the viewport width and handle the 'See More' button visibility
function checkViewportWidth() {
  const viewportWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0,
  );

  if (viewportWidth <= 768 && !container.querySelector('button')) {
    // Create the 'See More' button
    seeMoreButton = document.createElement('button');
    seeMoreButton.textContent = 'See More';
    container.appendChild(seeMoreButton);

    // Add event listener for the 'See More' button click
    seeMoreButton.addEventListener('click', handleSeeMoreClick);
  } else if (viewportWidth > 768) {
    // Remove the 'See More' button
    const seeMoreButton = container.querySelector('button');
    if (seeMoreButton) {
      container.removeChild(seeMoreButton);
    }
  }
}

// Check the viewport width when the window is resized
window.addEventListener('resize', checkViewportWidth);

// Initial check of the viewport width
checkViewportWidth();
