const $firstCatImage = document.querySelector(".first-cat-image");
const $secondCatImage = document.querySelector(".second-cat-image");
const $id = document.querySelector(".id");
const $password = document.querySelector(".pw");
const $login = document.querySelector(".login");
const $logout = document.querySelector(".logout");

const ONE_HOUR = 60 * 60 * 1000;


function getFirstCatImg(){
    axios.get("https://api.thecatapi.com/v1/images/search?size=full")
    .then(res => res.data)
    .then(value => $firstCatImage.src = value[0].url)
}

function getSecondCatImg(){
    axios.get("https://api.thecatapi.com/v1/images/search?size=full")
    .then(res => res.data)
    .then(value => $secondCatImage.src = value[0].url)
}

$firstCatImage.addEventListener("click", getFirstCatImg);
$secondCatImage.addEventListener("click", getSecondCatImg);

let threeHour = new Date();
threeHour.setTime(threeHour.getTime() + 72 * ONE_HOUR);

let countWrongAttempt = 0;
let oneHour = new Date();
oneHour.setTime(oneHour.getTime() + 1 * ONE_HOUR);

function checkCredentials(userId, password){
    // id : ehgns0305, password: 12345
    if(userId === "ehgns0305" && password === "12345"){
        return true;
    }

    return false;
}

function attemptLogin(userId, password){
    let validCredentials = checkCredentials(userId, password);
    if(validCredentials){
        //로그인 성공
    }
    else{
        countWrongAttempt++;
        if(countWrongAttempt >= 5){
            document.cookie = `banFlag=true; expires=` + oneHour;
            alert("로그인 5회 이상 실패하여 1시간 동안 로그인 금지");
            $login.disabled = true;

        }
        else{
            alert("로그인 실패");
        }
    }
}



function clearCookie(){
    let cookies = document.cookie.split(";");

    for(let i = 0; i < cookies.length; i++){
        let cookie = cookies[i];
        document.cookie = cookie + "=; max-age=0";
    }
}


$login.addEventListener("click", () =>{
    localStorage.setItem("id", $id.value);
    sessionStorage.setItem("id", $id.value);
    document.cookie = `id=${$id.value}; expires=` + threeHour;
    attemptLogin();
});

$logout.addEventListener("click", () =>{
    localStorage.clear();
    sessionStorage.clear();
    clearCookie();
})

