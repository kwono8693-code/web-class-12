document.addEventListener("DOMContentLoaded",function(){

    const btnMenu = document.querySelector(".btn-menu");
    const btnMenuClose = document.querySelector(".btn-menu-close");
    const hiddenGnb = document.querySelector(".hidden-gnb");

    // 메뉴 버튼을 누르면 숨겨진 메뉴가 나오는 기능

    btnMenu.addEventListener("click",()=>{
        hiddenGnb.classList.add("on")
    })

    btnMenuClose.addEventListener("click",()=>{
        hiddenGnb.classList.remove("on")
    })
})