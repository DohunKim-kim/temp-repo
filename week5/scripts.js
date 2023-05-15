const $img = document.getElementById("cat");
const $getCat = document.getElementById("get-cat");

/*function getCatImg(){
    fetch("https://api.thecatapi.com/v1/images/search?size=full").then((response) => {
        response.json().then((res) => {
            $img.src = res[0].url;
        })
    })
}

$getCat.addEventListener("click", getCatImg);
*/

//axios, promise로 간단하게 표현 가능함
/*function getCatImg(){
    const myPromise = new Promise((resolve, reject) =>{
        const data = fetch("https://api.thecatapi.com/v1/images/search?size=full").then((response) => response.json());
    
        if(data)
            resolve(data);
        else
            reject("Error");
    })
    myPromise
        .then((value) =>{
            $img.src = value[0].url
        })
        .catch((error) => {
            console.log(error);
        })
}
*/
function getCatImg(){
    axios.get("https://api.thecatapi.com/v1/images/search?size=full")
    .then(response => response.data)
    .then(value => $img.src = value[0].url)
}

$getCat.addEventListener("click", getCatImg);