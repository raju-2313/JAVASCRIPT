const API_URL = "https://dog.ceo/api/breeds/list/all";
const factPara = document.querySelector("#facts");
const btn = document.querySelector("#btn");
// let promise = fetch(API_URL);
// console.log(promise);

const getFacts = async () => {

    console.log(`getting data...`);

    let response = await fetch(API_URL);
    console.log(response.status);

    let data = await response.json();
    console.log(data);
    
    const breeds = Object.keys(data.message);
    const randomIndex = Math.floor(Math.random() * breeds.length);
    const randomBreed = breeds[randomIndex];

    factPara.innerText = `Breed: ${randomBreed.toUpperCase()}`;
}

btn.addEventListener("click", getFacts);