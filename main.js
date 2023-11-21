// Elements
jokeField = document.getElementById('joke')

// Functions
async function getChuckNorrisJoke() {
  try {
    let url = `https://api.chucknorris.io/jokes/random    `
    let response = await fetch(url, {
      method: "GET",
    })
    response = await response.json()
    jokeField.textContent = JSON.stringify(response.value)
    console.log(JSON.stringify(response.value))
  } catch (error) {
    console.log('Error: ' + error)
  }
}