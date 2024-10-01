// 情報登録画面用
const genderBtn = document.querySelectorAll(".btn");
const slideshow = document.querySelector(".slideshow");
const next = document.querySelectorAll(".next");
const meter = document.querySelector(".meter");

let translate = 0;
let num = 16.6;
let newNum = 0;
// 男性、女性のボタンの処理
for (let i = 0; i < genderBtn.length; i++) {
    genderBtn[i].addEventListener("click", () => {
        translate += num;
        slideshow.style.transform = `translateX(-${translate}%)`;
        newNum += num;
        meter.style.width = `${newNum}%`;
    });
}

// 次へを押したときのボタンの処理
for (let i = 0; i < next.length; i++) {
    next[i].addEventListener("click", () => {
        translate += num;
        slideshow.style.transform = `translateX(-${translate}%)`;
        newNum += num;
        meter.style.width = `${newNum}%`;
    });
}

// 次へを押したときのボタンの処理
const prev = document.querySelector(".prev");
prev.addEventListener("click", () => {
    translate -= num;
    slideshow.style.transform = `translateX(-${translate}%)`;
    newNum += num;
    meter.style.width = `${newNum}%`;
});
