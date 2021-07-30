
// July 28, 2021 00:00:00


var countdown = () => {
    let date = document.querySelector(".inputDate").value;
    let title = document.getElementById("titleText").value;
    
    

    let countDate = new Date(date).getTime(); 
    console.log(countDate);

    var interval = setInterval(() => {
       

        let now = new Date().getTime();
        let difference = countDate - now;

        // if (now > countDate){
        //     alert("This date is in the past!");
        //     clearInterval(countdown);
        //     return;
        // }
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

        

        document.getElementById('container').innerHTML = `
            <h2 id="eventName">${title}</h2>
            <div class="counter_container">
                <div class = "box_container">
                    <div class="days boxes" >${textDay}</div>
                    <p>Days</p>
                </div>
                <p>:</p>
                <div class = "box_container">
                    <div class="hours boxes" >${textHour}</div>
                    <p>Hours</p>
                </div>
                <p>:</p>
                <div class = "box_container">
                    <div class="minutes boxes" >${textMinute}</div>
                    <p>Minutes</p>
                </div>
                
                <p>:</p>
                <div class = "box_container">
                    <div class="seconds boxes" >${textSecond}</div>
                    <p>Seconds</p>
                </div>
            </div>`;


        if(difference <= 0){
                     clearInterval(interval);
                     document.querySelector(".days").innerText = "00";
                     document.querySelector(".hours").innerText = "00";
                     document.querySelector(".minutes").innerText = "00";
                     document.querySelector(".seconds").innerText = "00";
                     alert("Time up!!");
                     return;
            
                 }
    }, 1000);
    
}


document.getElementById("start_button").onclick = countdown;