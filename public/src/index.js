
// JavaScript Fetch, see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// NASA
// https://api.nasa.gov/
//

// HTTP request settings
const headers = new Headers();
const reqInit = { method: 'GET', headers: headers, mode: 'cors', cache: 'default' };

async function displayNasa() {

  const url_nasa = 'https://api.nasa.gov/planetary/apod?api_key=IpcMgXbpAzoXXkxdmzj8wUQtpQOzj8ye2FPN2vys';
  let apodHTML = '';
  try {
    const response = await fetch(url_nasa, reqInit);
    const data = await response.json();
    console.log(data);
    apodHTML = `
        <img class="image" src=${data.hdurl} alt='NASA Astronomy Pic of the Day ${data.title}'>
        <h4>${data.title}</h4>
        <p>Image credit & copyright: ${data.copyright} ${data.date}</p>
        `;
  }
  // catch any errors
  catch (err) {
    console.log(err);
  }

  // Set the innerHTML of the apod  element = html
  document.getElementById('apod').innerHTML = apodHTML;
}

// Animals
// https://github.com/public-apis/public-apis#animals
//

async function getRandomCat() {
  const url_cat = 'https://aws.random.cat/meow';

  try {
    const response = await fetch(url_cat, reqInit);
    const data = await response.json();
    document.getElementById("animalPic").src = data.file;
  }
  // catch any errors
  catch (err) {
    console.log(err);
  }

}

async function getRandomDog() {
  const url_dog = 'https://random.dog/woof.json';

  try {
    const response = await fetch(url_dog, reqInit);
    const data = await response.json();
    document.getElementById("animalPic").src = data.url;
  }
  // catch any errors
  catch (err) {
    console.log(err);
  }
}

// Call the function immediatly after script is loaded
displayNasa()

