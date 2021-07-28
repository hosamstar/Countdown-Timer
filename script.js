
// July 28, 2021 00:00:00


var countdown = () => {
    let date = document.getElementsByClassName("inputDate").value;
    let title = document.getElementsByClassName("titleText").value;
    let countDate = new Date(date).getTime(); 
    console.log(countDate);

    setInterval(() => {
       
        let now = new Date().getTime();
        let difference = countDate - now;

        // Time Calculation
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        // Calculate the difference time in days, hours, minutes and seconds
        let textDay = Math.floor(difference / day);
        let textHour = Math.floor((difference % day)  / hour);
        let textMinute = Math.floor((difference % hour)  / minute);
        let textSecond = Math.floor((difference % minute)  / second);

        document.querySelector(".days").innerText = textDay;
        document.querySelector(".hours").innerText = textHour;
        document.querySelector(".minutes").innerText = textMinute;
        document.querySelector(".seconds").innerText = textSecond;

        if(difference <= 0){
                     clearInterval(countdown);
                     document.querySelector(".days").innerText = "00";
                     document.querySelector(".hours").innerText = "00";
                     document.querySelector(".minutes").innerText = "00";
                     document.querySelector(".seconds").innerText = "00";
                     alert("Time up!!");
            
                 }
    }, 1000);
    
}


//document.getElementsByClassName("start_button").onclick = countdown;