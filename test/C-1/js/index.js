document.addEventListener("DOMContentLoaded",()=>{

    //popup
    const btnPopup = document.querySelector("#btn-popup")
    const popup = document.querySelector(".popup")
    const btnClose = document.querySelector("#btn-close")

    btnPopup.addEventListener("click", ()=>{
        popup.classList.add("on")
    })
    btnClose.addEventListener("click",()=>{
        popup.classList.remove("on")
    })

    //slide
    //3초마다 .train>li 태그 3개가 on 클래스가 지워지고 순번에 맞는 li 태그한테 on 클래스가 들어가면 됨

    const slides = document.querySelectorAll(".train>li")
    let count = 0;

    setInterval(()=>{
        count++
        if(count>2){count=0}
        slides.forEach((slides)=>{slides.classList.remove("on")})
        // 3개의 리스트 태그가 on 클래스를 지운다.

        slides[count].classList.add("on")
    },3000)

    // tab menu
    const tabs = document.querySelectorAll(".tabs>span")
    const tabDesc = document.querySelectorAll(".tab-desc>div")

    tabs.forEach((tab,i)=>{
        tab.addEventListener("click",()=>{
            //2개의 탭 내용에 on 클래스를 다 지운다.
            tabDesc.forEach(div=>{div.classList.remove("on")})
            tabDesc[i].classList.add("on")

            tabs.forEach(span=>span.classList.remove("on"))
            tabs.classList.add("on")
        })
    })

})