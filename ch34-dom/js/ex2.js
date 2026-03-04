console.log(this) // window 객체를 가리킴

document.addEventListener("DOMContentLoaded",function(){
   console.log(this)  // document 객체를 가리킴
    //문서 끝까지 읽고 난 뒤 한 번 실행되는 소스코드

    const btnNo= document.querySelector(".btn-no");
    const popup = document.querySelector(".popup");
    const modal = document.querySelector(".modal");
    btnNo.addEventListener("click",()=>{
        popup.classList.add("blind")
        modal.classList.add("blind")
    })
    modal.addEventListener("click",function(){
        console.log(this)
        popup.classList.add("blind")
        this.classList.add("blind") // modal을 가리킴
    })
})

