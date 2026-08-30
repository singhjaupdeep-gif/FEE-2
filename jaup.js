// let url = "https://official-joke-api.appspot.com/random_jokes"
// const setup=document.querySelector(".setup");
// const punchline=document.querySelector(".punchline");
// const btn = document.querySelector(".btn");
// getjoke();
// const data = fetch(url);

// BigInt.addEventListener("click", getjoke);
// function getjoke(){
//     const data = fetch(url);
// }
// data.then((data)=>{
//     return data.json();
// }).then((originaldata)=>{
//     console.log(originaldata);
//     setup.textContent=originaldata.setup;
//     punchline.textContent=originaldata.punchline;

// }).catch((error)=>{
//     console.log(error);
// });


let count = 0;

const counter = document.getElementById("count");

function updateCounter() {
    counter.textContent = count;
}

function increment() {
    count++;
    updateCounter();
}

function decrement() {
    count--;
    updateCounter();
}

function resetCounter() {
    count = 0;
    updateCounter();
}