const second = document.querySelector('#sec');
const minute = document.querySelector('#min');
const hour = document.querySelector('#hour');
let IntervalId;

function startWatch() {
    let sec =0;
    let min =0;
    let hours =0;

    IntervalId = setInterval(function() {

        sec += 1;
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
        
    }, 1000);
    
}