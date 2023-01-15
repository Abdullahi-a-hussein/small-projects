var changeAngle = 6;
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

var secondHand = document.getElementById('second');
var minuteHand = document.getElementById('minute');
var hourHand = document.getElementById('hour');


var secondAngle = seconds * changeAngle;
var minuteAngle = minutes * changeAngle + ((changeAngle/60)*seconds)
var hourAngle = hours * 30 + ((30/60) * minutes + (((30/60)/60)*seconds))


function update() {
    secondAngle += changeAngle/100;
    minuteAngle += (changeAngle/100/60);
    hourAngle += (changeAngle/100/60/12);
    secondHand.style.transform = "rotate(" + secondAngle + "deg)";
    minuteHand.style.transform = "rotate(" + minuteAngle + "deg)";
    hourHand.style.transform = "rotate(" + hourAngle + "deg)";
}

setInterval(update, 10);
window.addEventListener("focus", function(){
    this.window.location.reload()
})