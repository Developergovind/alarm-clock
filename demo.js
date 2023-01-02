//define some basic variables
let display = document.getElementById('alarm')
const audio = new Audio("/music/funny-alarm-48749.mp3")
audio.loop = true
let alarmtime = null
let alarmtimeout = null
//Display the alarm
function updateTime() {
    const date = new Date()
    const hours = formmateTime(date.getHours())
    const minutes = formmateTime(date.getMinutes())
    const seconds = formmateTime(date.getSeconds())
    display.innerText = hours + " : " + minutes + " : " + seconds;
}

setInterval(updateTime, 1000)

function formmateTime(time) {
    if (time < 10) {
        return "0" + time
    }
    else {
        return time;
    }
}


//set the alarm
function setAlarmTime(value) {
    alarmtime = value
}

function setAlarm() {
    if (alarmtime) {
        const current = new Date()
        const timeToAlarm = new Date(alarmtime)

        if (timeToAlarm > current) {
            const timeOut = timeToAlarm.getTime() - current.getTime()
            alarmtimeout = setTimeout(function () {
                audio.play()
            }, timeOut);
            alert("Alarm hasbeen set successfully !!")
        }
    }
    else
    {
        alert("bsdk time nikal jane ke bad alarm kon set karta he ya bata pahle tu")
    }
}


//clear alarm 
function clearAlarm()
{
    audio.pause();
    if (alarmtimeout)
     {
          clearTimeout(alarmtimeout)
          alert("Alarm cleared successfully !!")    
    }
}