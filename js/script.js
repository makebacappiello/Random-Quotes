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
      "A hug is a wonderful thing. It makes you feel wanted, needed, and loved all at the same time.",
    author: "Gregory Garcia and Dan Coscino",
    date: "October 26, 2010",
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
      "It is better wither to be silent, or to say things of more value than silence. Sooner throw a pearl at hazard than an idle or useless word; and do not say a little in many words, but a great deal in a few.",
    author: "Pythagoras",
    date: "582 BC - 507 BC",
  },
  {
    quote:
      "If the only tool you have is a hammer, you tend to see every problem as a nail.",
    author: "Abraham Maslow",
    date: "1908 - 1970",
  },
  {
    quote:
      "Take the attitude of a student, never be too big to ask questions, never know too much to learn something new.",
    author: "Og Mandino",
    date: "1923 - 1996",
  },
  {
    quote: " There are too many people, and too few human beings.",
    author: "Robert Zend",
  },
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  const getOneQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuote(quotes[randomIndex]);
  };
}

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
