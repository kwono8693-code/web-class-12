document.addEventListener("DOMContentLoaded",function(){

    const train = document.querySelector(".train");
    const btnNext = document.querySelector("#btn-next");
    const btnPrev = document.querySelector("#btn-prev");
    let count = 0;
    let slides = train.children.length; // list의 개수
    train.style.width=`${slides*100}%`

    btnNext.addEventListener("click",function(){
        count++;
        if(count>slides-1){count=slides-1};
        //train 클래스가 왼쪽으로 1000px씩 이동
        train.style.transform = `translateX(${-(100/slides)*count}%)`;
    });
    btnPrev.addEventListener("click",()=>{
        count--
        if(count<0){count=0};
        train.style.transform = `translateX(${-(100/slides)*count}%)`;
    });
})