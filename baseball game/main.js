// 야구 게임
// 룰: 입력받은 숫자의 B: , S: 값을 알려준다.
// 버튼 누르면 정답값이 결정 됨

let ans;
function test(val){
    if(val === "3자리"){
        ans = 159;
    } else if(val === "4자리"){
        ans = 3806;
    } else if(val === "5자리"){
        ans = 40186;
    }
    console.log(ans);
}

let i = 1;
function addVal(){
    const num = document.querySelector(".num");
    const gameTable = document.querySelector(".game-table");
    const newRow = gameTable.insertRow();

    const turn = newRow.insertCell(0);
    const number = newRow.insertCell(1);
    const result = newRow.insertCell(2);
    
    let val = game(ans)
    let strAns = ans.toString();
    
    turn.innerText = `${i++}`;
    number.innerText = `${num.value}`
    if(val[1] === strAns.length){
        result.innerText = `O.K.`
    } else{
        result.innerText = `B: ${val[0]}, S: ${val[1]}`;
    }
}


function game(ans){
    const num = document.querySelector(".num").value;
    const strAns = ans.toString();
    const strNum = num.toString();
    let k = 0;
    let result = [0, 0];
    while(k < strAns.length){
        if(strAns[k] === strNum[k]){
            result[1] += 1;
        } else{
            for(let j of strAns){
                if(j === strNum[k]){
                    result[0] += 1;
                }
            }
        }
        k += 1;
    }
    return result;
}


