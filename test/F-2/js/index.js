document.addEventListener("DOMContentLoaded",()=>{

    // 모달 팝업 기능
    const popup = document.querySelector(".popup")
    const modal = document.querySelector(".modal")
    const btnClose = document.querySelector(".btn-close")
    const btnPopup = document.querySelector("#btn-popup")

    btnPopup.addEventListener("click",()=>{
        popup.classList.add("on")
        modal.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
        modal.classList.remove("on")
    })

    // 슬라이드 기능
    const slide = document.querySelectorAll(".train>li")
    let count = 0;

    setInterval(()=>{
        count++
        if(count>2){count=0}
        slide.forEach((li)=>{li.classList.remove("on")
        slide[count].classList.add("on")
        })
    }
        ,2500)
        
})