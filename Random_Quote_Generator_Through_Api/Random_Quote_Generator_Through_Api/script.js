const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const buttonElement = document.getElementById('new-quote');
buttonElement.addEventListener('click', getQuote);
function getQuote() {
    fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex];
            quoteElement.textContent = randomQuote.text;
            authorElement.textContent = `- ${randomQuote.author}`;
        })
        .catch(error => {
            quoteElement.textContent = 'An error occurred while fetching the quote.';
            authorElement.textContent = '';
            console.log(error);
        });
}