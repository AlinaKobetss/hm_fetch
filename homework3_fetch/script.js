const cardsContainer = document.querySelector(".cards_container");

let url = "https:jsonplaceholder.typicode.com/photos";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let res = data.filter((elem) => elem.albumId === 35);
    render(res);
  });

function render(array) {
  for (let elem of array) {
    const cardElem = document.createElement("div");
    const titleEl = document.createElement("h2");
    const imgEl = document.createElement("img");

    cardElem.classList.add("carde");

    titleEl.innerText = elem.title;
    imgEl.src = elem.url;
    imgEl.alt = elem.title;

    imgEl.style.width = "200px";
    imgEl.style.height = "200px";

    cardElem.append(titleEl, imgEl);
    cardsContainer.append(cardElem);
  }
}