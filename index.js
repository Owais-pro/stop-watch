const second = document.querySelector('#sec');
const minute = document.querySelector('#min');
const hour = document.querySelector('#hour');
const miliSecond = document.querySelector('#mili')
let IntervalId;

function startWatch() {
    let sec =0;
    let min =0;
    let hours =0;
    let ms =0;

    IntervalId = setInterval(function() {

        ms +=10;
        if(ms === 1000)
        {
            ms =0;
            sec += 1;
        }
        if(sec === 60)
        {
            sec = 0;
            min +=1;
        }
        if(min === 60)
        {
            min = 0;
            hours +=1;
        }

        second.innerHTML = sec;
        minute.innerHTML = min;
        hour.innerHTML = hours;
        miliSecond.innerHTML = ms;
        
    }, 10);
    
}

function StopWatch(){
    clearInterval(IntervalId);
}


function ResetWatch(){
    clearInterval(IntervalId);
    second.innerHTML = 0;
    minute.innerHTML = 0;
    hour.innerHTML = 0;
    miliSecond.innerHTML = 0;
}