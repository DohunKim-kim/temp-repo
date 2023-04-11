function validEmail(){
    const id = document.querySelector(".id");
    const idResult = document.querySelector(".id-result");
    let pattern = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;
    if(id.value.match(pattern) != null){
        idResult.innerHTML="올바른 형태입니다.";
        idResult.style.color="blue";
    }
    else{
        idResult.innerHTML="올바른 이메일 형태가 아닙니다.";
        idResult.style.color="red";
    }
}

const pw = document.querySelector(".pw");
const pwResult = document.querySelector(".pw-result");

function checkPassword(){
    const pw1 = document.querySelector(".pw").value;
    const pw2 = document.querySelector(".pw-check").value;
    if(pw1 !== pw2){
        pwResult.innerHTML = "비밀번호가 일치하지 않습니다.";
        pwResult.style.color = "red";
    }
    else{
        pwResult.innerHTML = "";
    }
}

// 학번 10자리 중 6번째, 7번째로 학번 파악함
// 5번째 까지는 아무렇게나 받고 6번째, 7번째 값만 필요함
const major = document.querySelector(".major");
const studentNumber = document.querySelector(".student-number");

studentNumber.addEventListener("change", findMajor);

function findMajor(){
    const major = document.querySelector(".major");
    let str = studentNumber.value.match(/^.{5}(\d{2}).*$/);

    if(str[1] == "20"){
        major.innerHTML = "기계공학부";
    } else if(str[1] == "40"){
        major.innerHTML = "메카트로닉스공학부";
    } else if(str[1] == "61"){
        major.innerHTML = "전기․전자․통신공학부";
    } else if(str[1] == "36"){
        major.innerHTML = "컴퓨터공학부";
    } else if(str[1] == "51"){
        major.innerHTML = "디자인·건축공학부 디자인공학전공";
    } else if(str[1] == "72"){
        major.innerHTML = "디자인·건축공학부 건축공학전공";
    } else if(str[1] == "74"){
        major.innerHTML = "에너지신소재화학공학부";
    } else if(str[1] == "80"){
        major.innerHTML = "산업경영학부";
    }
}

const autoHyphen = (target) => {
    target.value = target.value
      .replace(/[^0-9]/g, '')
     .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3").replace(/(\-{1,2})$/g, "");
}

function moveToLoginPage(){
    
}