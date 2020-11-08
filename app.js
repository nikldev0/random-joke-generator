const button = document.querySelector('.container button');
const joke = document.querySelector('.container p');

button.addEventListener('click', getJoke);

async function getJoke() {
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    joke.innerHTML = jokeObj.joke
}