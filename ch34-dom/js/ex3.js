document.addEventListener("DOMContentLoaded",function(){

    const tabs = document.querySelectorAll(".tabs>span");
    const tabDes = document.querySelectorAll(".tab-des>section");

    tabs.forEach(function(span,i){
        span.addEventListener("click",function(){
            tabs.forEach(tab=>tab.classList.remove("active"))
            // 3개의 span 태그에 있는 active를 다 지운다.
            span.classList.add("active")
            // 클릭한 span 태그에 active 클래스가 추가된다.
            tabDes.forEach(section=>section.classList.remove("active"))
            tabDes[i].classList.add("active")
        })

        // tabs는 배열 /  배열 안의 원소는 tabs 클래스의 자식 span 태그 3개의 원소가 있고 그걸 감싸는 배열 / 배열이기 때문에 forEach 사용 가능
        // tabs.forEach() -> 각각의 span 태그에 일어나는 동작들
        // span 내가 클릭한 span 태그
    })

    let fruits = ["사과","바나나","배"]
    fruits.forEach(function(fruit,i){
        console.log(fruit)
        console.log(i)
        //forEach -> 배열 전문 함수 배열한테만 쓸 수 있음
        // 특정한 동작을 실행하기 위한 것 -> 함수
        // fruit 매개 변수의 이름은 내 마음대로 지으면 된다. 매개변수가 가르키는 건 각각 배열의 원소
        // i -> 각각 원소의 순번
    })
})
