document.addEventListener("DOMContentLoaded",function(){
    //문서 끝까지 읽고 난 뒤 한 번 실행되는 소스코드
    const btnClosePopup= document.querySelector(".btn-close-popup");
    const popup = document.querySelector(".popup");
    btnClosePopup.addEventListener("click",()=>{
        // popup.style.display = "none"
        popup.classList.add("hide")
    })
})

