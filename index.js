const second = document.querySelector('#sec');
const minute = document.querySelector('#min');
const hour = document.querySelector('#hour');
const miliSecond = document.querySelector('#mili')
let IntervalId;

function startWatch() {
    let sec =0;
    let min =0;
    let hours =0;
    let mili =0;

    IntervalId = setInterval(function() {

        mili += 10;
        if(mili === 1000)
        {
            mili =0;
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
        
    }, 1000);
    
}

function StopWatch(){
    clearInterval(IntervalId);
}


function ResetWatch(){
    clearInterval(IntervalId);
    second.innerHTML = 0;
    minute.innerHTML = 0;
    hour.innerHTML = 0;
}