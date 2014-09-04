var count=0;
setInterval(changeIt,3000);
function changeIt(){
if(count===0){
document.getElementById("slidesh").src="slider2.jpg";
count++;
}
else if(count===1){
document.getElementById("slidesh").src="slider3.jpg";
count++;
}
else if(count===2){
document.getElementById("slidesh").src="slider4.jpg";
count++;
}
else if(count===3){
document.getElementById("slidesh").src="slider1.gif";
count=0;
}
}
var counter=0;