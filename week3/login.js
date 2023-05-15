const $firstCatImage = document.querySelector(".first-cat-image");
const $secondCatImage = document.querySelector(".second-cat-image");
const $login = document.querySelector(".login");

function getCatImg(){
    axios.get("https://api.thecatapi.com/v1/images/search?size=full")
    .then(res => res.data)
    .then(value => $firstCatImage.src = value[0].url)

    axios.get("https://api.thecatapi.com/v1/images/search?size=full")
    .then(res => res.data)
    .then(value => $secondCatImage.src = value[0].url)
}

$login.addEventListener("click", getCatImg);