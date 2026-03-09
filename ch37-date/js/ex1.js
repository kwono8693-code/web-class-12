document.addEventListener("DOMContentLoaded",()=>{
    
    const clock = document.querySelector(".clock");
    const buttonDay = document.querySelector("#day-mode");
    const buttonNight = document.querySelector("#night-mode");

    buttonDay.addEventListener("click",()=>{
        clock.classList.remove("night");
        clock.classList.add("day");
    });

    buttonNight.addEventListener("click",()=>{
        clock.classList.add("day");
        clock.classList.add("night");
    });

    let arrayMonth = ["01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12];
    let arrayDay = ["일", "월", "화", "수", "목", "금", "토"];
    const onday = document.querySelector(".onday");
    const ontime = document.querySelector(".ontime");

    function showTime(){
        let now = new Date()
        let month = now.getMonth();
        let date = now.getDate()<10?"0"+now.getDate():now.getDate();
        let day = now.getDay();
        let hour = now.getHours()<10?"0"+now.getHours():now.getHours();
        let minute = now.getMinutes()<10?"0"+now.getMinutes():now.getMinutes();
        let second = now.getSeconds()<10?"0"+now.getSeconds():now.getSeconds();

        onday.innerHTML = `${arrayMonth[month]}월 ${date}일 ${arrayDay[day]}요일`
        ontime.innerHTML = `${hour}:${minute}:${second}`

        if(getDayOrNight()){
            clock.classList.remove("night")
            clock.classList.add("day")
        }else{
            clock.classList.remove("day")
            clock.classList.add("night")
        }
    }
    showTime()
    setInterval(showTime,1000)

    // 오전 9시 40분 ~ 오후 6시 10분 -> 낮
    // 그 외 시간은 모두 밤이라고 설정

    function getDayOrNight(){
        let now = new Date();
        let hours = now.getHours(); // 0~23
        let minutes = now.getMinutes(); // 0~59
        if((hours>6 && hours<18)){
            return true // "낮";
        }else{
            return false // "밤";
        }
    }
    getDayOrNight()
    console.log(getDayOrNight())

    if(getDayOrNight()){
        clock.classList.add("day")
    }else{
        clock.classList.add("night")
    }
});