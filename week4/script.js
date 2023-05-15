const $selection = document.querySelector(".selection");
const $category = document.querySelector("div.category");

// 클릭 후 해당 div가 selection div 로 이동
/*function move(index){
    const book = document.querySelector("div.category").childNodes[index - count];
    book.remove();
    $selection.append(book);
    count += 1;
}
*/

$category.onclick = function(event){
    let li = event.target.closest('li');

    if(!li) return;

    if(!$category.contains(li)) return;

    $selection.append(li);
};

// 삭제 기능 -> category에 순서에 맞게 다시 들어가기
function returnDiv(){
    const book = document.querySelector(".selection").childNodes[3];
    book.remove();
    $category.append(book);
}


const data = [{
    id: 1,
    name: "책1",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 2,
    name: "책2",
    img: "http://image.yes24.com/goods/117014613/L"
},{
    id: 3,
    name: "책3",
    img: "http://image.yes24.com/goods/117958120/L"
},{
    id: 4,
    name: "책4",
    img: "http://image.yes24.com/goods/118468152/L"
},{
    id: 5,
    name: "책5",
    img: "http://image.yes24.com/goods/116887399/L"
},{
    id: 6,
    name: "책6",
    img: "http://image.yes24.com/goods/117985747/L"
},{
    id: 7,
    name: "책7",
    img: "http://image.yes24.com/goods/117716170/L"
},{
    id: 8,
    name: "책8",
    img: "http://image.yes24.com/goods/118104953/L"
},{
    id: 9,
    name: "책9",
    img: "http://image.yes24.com/goods/117643865/L"
},{
    id: 10,
    name: "책10",
    img: "http://image.yes24.com/goods/1441810/L"
},{
    id: 11,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 12,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 13,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 14,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 15,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 16,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 17,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 18,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 19,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 20,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 21,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 22,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 23,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 24,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 25,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 26,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 27,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 28,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 29,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
},{
    id: 30,
    name: "책10",
    img: "https://image.yes24.com/Goods/118472695/L"
}]

data.forEach((book) => {
    const temp = document.createElement('li');
    temp.innerHTML = `<div id="books${book.id}">
        <div class="bookId">${book.id}</div>
        <img src="${book.img}">
        <p>${book.name}</p>
        </div>`
    document.querySelector(".category").append(temp);
})