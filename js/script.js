/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array  gotten from https://www.quotationspage.com/random.php
 ***/

const quotes = [
  {
    quote:
      "A hug is a wonderful thing. It makes you feel wanted, needed, and loved all at the same time",
    author: "Gregory Garcia and Dan Coscino",
    date: "October 26, 2010",
    citation: "A Hug Is a Wonderful Thing ",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "It is better with either to be silent, or to say things of more value than silence. Sooner throw a pearl at hazard than an idle or useless word; and do not say a little in many words, but a great deal in a few",
    author: "Pythagoras",
    date: "582 BC - 507 BC",
  },
  {
    quote:
      "If the only tool you have is a hammer, you tend to see every problem as a nail",
    author: "Abraham Maslow",
    date: "1908 - 1970",
    citation: "Toward a Psychology of Being.",
  },
  {
    quote:
      "Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.",
    author: "Og Mandino",
    date: "1923 - 1996",
    citation: "The Greatest Salesman in the World",
  },
  {
    quote: " There are too many people, and too few human beings",
    author: "Robert Zend",
  },
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  // the function is using the math function to get a random quote from the variable get one quote from the index which will be generated from the variable randomIndex

  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
//calling the function that gets everything after calculation
getRandomQuote();

/***
//  * `printQuote` function
 ***/

//this function prints the quotes to the screen and attaches it to the dom

function printQuote() {
  let currentQuote = getRandomQuote();

  //actual quote in its original form

  let quoteBox = `<p class="quote">${currentQuote.quote}</p>
                <p class="source">${currentQuote.author}`;

  //if a citation is included in the quote then add it

  if (currentQuote.citation) {
    quoteBox += ` <span class="citation">${currentQuote.citation}</span>`;
  }
  //if a date is included in the quote then add it

  if (currentQuote.date) {
    quoteBox += `<span class="year"> ${currentQuote.date}</span>`;
  }
  // close off the QuoteBox

  quoteBox += `</p> `;

  document.getElementById("quote-box").innerHTML = quoteBox;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
