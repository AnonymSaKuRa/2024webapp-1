/*
    ロゴのアニメーションが終わったらメインのコンテンツが出てくる
    indexページを作っている間はコメントアウトで処理されないようにしておく
    cssの方も.contentsのtransformがコメントアウトされている
*/
// const content = document.querySelector(".contents");
// function dispOpen() {
//     content.classList.add("active");
// }

// setTimeout(dispOpen, 6000);

const googleBtn = document.querySelector(".google_flex");

googleBtn.addEventListener("click", () => {
    document.querySelector(".contents").classList.add("click_google_btn");
    document.querySelector(".select").classList.add("click_google_btn_active");
});