document.addEventListener("DOMContentLoaded", ()=>{

    // 팝업 기능
    const btnPopup = document.querySelector("#btn-popup");
    const popup = document.querySelector(".popup")
    const modal = document.querySelector(".modal")
    const btnClose = document.querySelector("#btn-close")


    // 팝업 열리는 기능
    btnPopup.addEventListener("click", ()=>{
        popup.classList.add("on")
        modal.classList.add("on")
    })

    // 팝업 닫히는 기능
    btnClose.addEventListener("click", ()=>{
        popup.classList.remove("on")
        modal.classList.remove("on")
    })

    // 슬라이드
    const train = document.querySelector(".train")
    let count = 0;

    setInterval(()=>{
        count++
        if(count>2){count=0}
        train.style.transform = `translateX(${-33.333*count}%)`
    },2500)
});