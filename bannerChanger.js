var counter=0;
importBanner();
importBottom();
$("#arch").hover(archIn, archOut);
function importBanner(){
var text='<div id="intro"><ul id="coolMenu"><img style="float:left; height: 100px; width: 100px;" alt="logo" src="firebird.png"/><li><a class="pt" href="index.html">Home</a></li><li><a class="pt" href="fremontAboutUs.html">About Us</a></li><li><a class="pt" href="fremontSponsors.html">Sponsors</a></li><li><a class="pt" href="fremontMedia.html">Media</a></li><li><a class="pt" href="archiveHome.html">Game Archives</a><ul class="noJS"><li><a href="year2012.html">2012</a></li><li><a href="year2011.html">2011</a></li></ul></li><li><a class="pt" href="fremontResources.html">Resources</a></li><li><a class="pt" href="fremontAnnouncements.html">Announcements</a></li><a href="http://fremontrobotics.blogspot.com/"><img src="BlogspotLogo.jpg" style="position:absolute; height:35px; width:35px;"/></a></ul><script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script></div><div style="clear:both"/>';
document.getElementById("banner").innerHTML=text;
}
function importBottom(){
var text='<div id="bottom"><div id="left">Copyright &copy; 2012 Fremont High School Robotics Team #3501 </br>1279 Sunnyvale Saratoga Rd., Sunnyvale , CA 94087 </br></div><div id="right"><a href="index.html">Home</a> | <a href="fremontContact.html">Contact Us</a></div></div>';
document.getElementsByTagName("body")[0].innerHTML+=text;
}
function archIn(){
var left=parseInt($("#all").css("marginLeft"),10);
$("#archive").hide().css({visibility: "visible"}).fadeIn("fast");
$(".dropper").fadeIn("fast");
}
function archOut(){
$("#archive").fadeOut("fast");
$(".dropper").fadeOut("fast");
}
function changeColor(){
if(counter===0){
document.getElementById("bannerSlide").src="banner2.png";
counter++;
}
else if(counter===1){
document.getElementById("bannerSlide").src="banner3.png";
counter++;
}
else if(counter===2){
document.getElementById("bannerSlide").src="banner4.png";
counter++;
}
else if(counter===3){
document.getElementById("bannerSlide").src="banner5.jpg";
counter++;
}
else if(counter===4){
document.getElementById("bannerSlide").src="banner6.png";
counter++;
}
else if(counter===5){
document.getElementById("bannerSlide").src="banner1.jpg";
counter=0;
}
}