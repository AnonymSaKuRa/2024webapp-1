// 要素の取得
const genderBtn = document.querySelectorAll(".btn");
const slideshow = document.querySelector(".slideshow");
const next = document.querySelectorAll(".next");
const meter = document.querySelector(".meter");


let translate = 0;    // translateXの初期値
const num = 12.5;     // コンテンツを動かす値
const widthNum = 20;  // メーターを動かすための値
let newNum = 0;       // メーターの初期値

// translateXを動かすための関数
function slideMove(moveNum, moveWidth) {
    translate += moveNum;
    slideshow.style.transform = `translateX(-${translate}%)`;
    newNum += moveWidth;
    meter.style.width = `${newNum}%`;
}

// 男性、女性のボタンの処理
for (let i = 0; i < genderBtn.length; i++) {
    genderBtn[i].addEventListener("click", () => {
        slideMove(num, widthNum);
    });
}

// 次へを押したときのボタンの処理
for (let i = 0; i < next.length; i++) {
    next[i].addEventListener("click", () => {
        slideMove(num, widthNum);
    });
}

// 戻るを押したときのボタンの処理
const prev = document.querySelector(".prev");
prev.addEventListener("click", () => {
    translate -= num;
    slideshow.style.transform = `translateX(-${translate}%)`;
    newNum -= widthNum;
    meter.style.width = `${newNum}%`;
});
