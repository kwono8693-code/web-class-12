document.addEventListener("DOMContentLoaded", ()=> {

    const currentCount = document.querySelector("#current-count")
    const rotateBox = document.querySelector(".rotate-box")
    const header = document.querySelector("header")
    const sections = document.querySelectorAll(".box>section")
    
    window.addEventListener("scroll",()=>{
        // 스크롤바가 움직일 때 실행되는 소스코드

        let distance = window.scrollY
        currentCount.innerHTML = distance
        rotateBox.style.transform = `rotate(${distance/2}deg)`

        if(distance>=600){
            header.classList.add("on")
        }else{
            header.classList.remove("on")
        }
        // sections.forEach(tag=>{
        //     tag.style.background = `url("./img/bgwave.png") ${-distance/12}% 0% repeat-x;`
        // })

        sections.forEach(tag=>{
            tag.style.background = `url("./img/bgwave.png") repeat-x ${-distance/12}% 0%`;
        })







    })

})
