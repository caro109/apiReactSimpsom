const options = {method: 'GET'};
const URL ='https://thesimpsonsquoteapi.glitch.me/quotes';

fetch(URL)
  .then(response => response.json())
  .then(data => {
    createCard(data[0])
  })
  .catch(err => console.error(err));