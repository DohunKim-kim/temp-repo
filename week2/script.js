function div_show(){
    document.querySelector(".privateInfo").style.display = "block";
}

function div_hide(){
    document.querySelector(".privateInfo").style.display = "none";
}

function change(){
    const hideInfo = document.querySelector(".hideInfo")
    if(hideInfo.value == '개인 정보 숨기기'){
        hideInfo.value = '개인 정보 공개';
        div_hide();
    }
    else{
        hideInfo.value = '개인 정보 숨기기';
        div_show();
    }
}

// 확인하는 습관 가지기
const hi = document.querySelector(".hi")
console.log('hi', hi)
// console 창에 <div class="hi">hi</div>가 출력 됨