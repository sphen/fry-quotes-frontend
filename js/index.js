// background colors array

const colors = [
  '#34495E',
  '#4A89DC',
  '#967ADC',
  '#6A50A7',
  '#9b59b6',
  '#BF263C',
  '#DA4453',
  '#D35400',
  '#E9573F',
  '#F6BB42',
  '#F1C40F',
  '#E0C341',
  '#8CC152',
  '#2ABA66',
  '#37BC9B',
];

// selectors

const newQuote = document.querySelector('#getQuote');
const tweetQ = document.querySelector('#tweet');
const quoteWrap = document.querySelector('.page');
const qText = document.getElementById('quote');
const qAuthor = document.getElementById('author');
const qSeason = document.getElementById('season');
const qEpisode = document.getElementById('episode');
const page = document.getElementsByTagName('BODY')[0];
let curQuote;

// event listeners

newQuote.addEventListener('click', getQuote);
tweetQ.addEventListener('click', tweeter);
window.addEventListener('load', getQuote);

// functions

// change background color to random one from 'colors' array
// id 5 and 24 get specific colors as easter eggs
// function bgChange(id) {
//   console.log('testing123');
//   let bgColor = Math.floor(Math.random() * colors.length);
//   console.log(id);
//   if (id == 5) {
//     page.style.backgroundColor = '#6A50A7';
//   } else if (id == 24) {
//     page.style.backgroundColor = '#4A89DC';
//   } else {
//     page.style.backgroundColor = colors[bgColor];
//   }
// }
// bg change arrow function
const bgCh = (id) => {
  let bgColor = Math.floor(Math.random() * colors.length);
  id == 5
    ? (page.style.backgroundColor = '#6A50A7')
    : id == 24
    ? (page.style.backgroundColor = '#6A50A7')
    : (page.style.backgroundColor = colors[bgColor]);
};

// retrieve a new random quote from the api using fetch
function fetchQ() {
  fetch('https://sphen-new-api.herokuapp.com/quotes/random')
    .then((res) => res.json())
    .then((data) => {
      curQuote = data.quote;
      let id = data.id;
      bgCh(id);
      console.log(data);
      // delay changing html to avoid pop then fade back in
      setTimeout( () => {
        qText.innerHTML = data.quote;
        qAuthor.innerHTML = data.author;
        qSeason.innerHTML = 's' + data.season;
        qEpisode.innerHTML = 'e' + data.episode;
        quoteWrap.classList.toggle('fadeOut');
        quoteWrap.classList.toggle('fadeIn');
      }, 500);
    });
}

// setTimeout(function () {
//   qText.innerHTML = data.quote;
//   qAuthor.innerHTML = data.author;
//   qSeason.innerHTML = 's' + data.season;
//   qEpisode.innerHTML = 'e' + data.episode;
//   quoteWrap.classList.toggle('fadeOut');
//   quoteWrap.classList.toggle('fadeIn');
// }, 500);

// fade out content and get a quote
function getQuote() {
  quoteWrap.classList.toggle('fadeOut');
  quoteWrap.classList.toggle('fadeIn');
  fetchQ();
}
// get quote arrow function
// const getQuote = () => {
//   quoteWrap.classList.toggle('fadeOut');
//   quoteWrap.classList.toggle('fadeIn');
//   fetchQ();
// }

// tweet the current quote
function tweeter() {
  console.log('tweettweet');
  tweetQ.setAttribute(
    'href',
    'https://twitter.com/intent/tweet?hashtags=freecodecamp,quotemachine&related=freecodecamp&text=' +
      encodeURIComponent('"' + curQuote + '"')
  );
}
// tweet arrow function
// const tweetit = () => {
//   tweetQ.setAttribute(
//     'href',
//     'https://twitter.com/intent/tweet?hashtags=freecodecamp,quotemachine&related=freecodecamp&text=' +
//       encodeURIComponent('"' + curQuote + '"')
//   );
// }
