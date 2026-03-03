document.addEventListener("DOMContentLoaded",function(){
    const btn1 = document.querySelector("#btn1");
    btn1.addEventListener("click",function(){
        alert("안녕하세요.");
    })

    const btn2 = document.querySelector("#btn2");
    const box = document.querySelector(".box");
    btn2.addEventListener("click",function(){
        box.style.backgroundColor = "lime";
    })    

    const btn3 = document.querySelector("#btn3"); // 태그를 저장하는 변수는 const로 만든다.
    btn3.addEventListener("click",function(){
        box.style.backgroundColor = "initial";
    })

    const originFontSize = 20;
    const html = document.querySelector("html");
    let basicFontSize = 20;
    let minFontSize = 14;
    let maxFontSize = 26;
    const chip = document.querySelector(".chip");


    const btnSmallFont = document.querySelector("#btn-small-font");

    btnSmallFont.addEventListener("click",function(){
        if(basicFontSize<=minFontSize){
            alert(minFontSize+"PX보다 작게 글씨를 설정할 수 없습니다.")
            return 
        }
        basicFontSize-=1;
        chip.innerHTML = `${basicFontSize}px`
        html.style.fontSize = `${basicFontSize}px`;
    })

    const btnBigFont = document.querySelector("#btn-big-font")

    btnBigFont.addEventListener("click",function(){
        if(basicFontSize>=maxFontSize){
            alert(maxFontSize+"px보다 크게 글씨를 설정할 수 없습니다.")
            return
        }
        basicFontSize+=1;
        chip.innerHTML = `${basicFontSize}px`
        html.style.fontSize = `${basicFontSize}px`
    })

    const btnBasicFont = document.querySelector("#btn-basic-font");

    btnBasicFont.addEventListener("click",()=>{
        html.style.fontSize = originFontSize+"px";
        chip.innerHTML = `${originFontSize}px`;
        basicFontSize = originFontSize;
    })
})

