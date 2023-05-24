const $actTime = document.querySelector(".act-time");
const $startButton = document.querySelector(".start-button");
const $stopButton = document.querySelector(".stop-button");
const $waitFivesec = document.querySelector(".wait-fivesec");
const $stopwatch = document.querySelector(".stopwatch");
const $timer = document.querySelector(".timer");
const $setTime = document.querySelector(".set-time");

let secCount = 0;
let minCount = 0;
let waitTime = 0;
let intervalId = null;
let timerType = 0; // 0 -> 스탑워치, 1 -> 타이머

$stopwatch.addEventListener("click", () =>{
    $actTime.innerHTML = `00:00`;
    timerType = 0;
})

$timer.addEventListener("click", () =>{
    $actTime.innerHTML = `<input class="set-time" type="text" placeholder="분">
    <input class="set-time" type="text" placeholder="초">`
    timerType = 1;
})

function timerStart(){
    if(timerType == 0){
        intervalId = setInterval(() => {
            secCount++;
            if(secCount == 60){
                secCount = 0;
                minCount++;
            }
            $actTime.innerHTML = `${minCount < 10 ? `0` : ``}${minCount}:${secCount < 10 ? `0` : ``}${secCount}`
        }, 1000);
    }else{

    }
    
}

$startButton.addEventListener("click", timerStart);

$stopButton.addEventListener("click", () =>{
    clearInterval(intervalId);
})

// 5초 대기 함수=> clearInterval(intervalId) -> 5초 대기 -> 다시 interval 시작
function debounce(){
    if(intervalId) clearInterval(intervalId);
    intervalId = setTimeout(timerStart, 5000);
}

// promise를 잘 쓴 예시
let timeoutId;
async function waitFiveSec(){
    const fivesec = new Promise((resolve, reject) => {
        let id = setTimeout(() => {
            console.log(id);
            if(id == timeoutId) {
                timerStart();
            }
            else reject(false);
        }, 5000)
        clearInterval(intervalId);
        timeoutId = id;
    })
    return await fivesec;
}

async function waitFiveSecFunc(){
    await waitFiveSec();
}

$waitFivesec.addEventListener("click", waitFiveSecFunc);