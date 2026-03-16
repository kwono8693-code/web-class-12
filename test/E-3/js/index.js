document.addEventListener("DOMContentLoaded",()=>{
    const popup = document.querySelector(".popup")
    const btnPopup = document.querySelector("#btn-popup")
    const btnClose = document.querySelector("#btn-close")

    btnPopup.addEventListener("click", ()=>{
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
    })

    const train = document.querySelector(".train")
    let count = 0 ;

    setInterval(()=>{
        count++
        if(count>2){count=0}
        train.style.transform = `translateY(${-33.333*count}%)`
    },2500)

})