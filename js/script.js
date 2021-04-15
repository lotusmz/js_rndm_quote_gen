/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * This array includes the list of quotes to be used in the project.
***/

let quotes = [
  {
    quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    source: 'Nelson Mandela'
  },
  {
    quote: 'Folks are usually about as happy as they make their minds up to be.',
    source: 'Abraham Lincoln'
  },
  {
    quote: 'You cannot find peace by avoiding life.',
    source: 'Michael Cunningham'
  },
  {
    quote: 'I know what they would like, they would like a blank they could fill in. A person already filled in disturbs them terribly.',
    source: 'Patricia Highsmith',
    citation: 'The Price of Salt'
  },
  {
    quote: 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
    source: 'Patrick McKenzie',
    citation: 'Twitter',
    year:'2016'
  }
];

/***
 * `getRandomQuote` function
 * Does not receive any parameters.
 * It obtains the total of objects in the quotes array and obtains a random number. 
 * Then it returns the quote based from that random number.
***/
function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * quotes.length);

  return quotes[randomNumber];
}

/***
 * `printQuote` function
 * Does not receive any parameters.
 * It calls the getRandomQuote function to obtain a quote
 * It generates the html text with the quote that will be displayed.
***/
function printQuote(){
  let quote = getRandomQuote();
  let html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
  `;

  if(quote.citation){
    html += `<span class="citation">${quote.citation}</span>`;
  }

  if(quote.year){
    html += `<span class="year">${quote.year}</span>`;
  }

  html += `</p>`;

  return document.getElementById('quote-box').innerHTML = html;
} 

printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);