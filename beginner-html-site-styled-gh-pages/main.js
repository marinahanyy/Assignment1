var myImage = document.querySelector('img');
myImage.onclick=function(){
var mySrc = myImage.getAttribute('src');
if(mySrc === 'images/firefox-icon.png'){
    myImage.setAttribute('src','images/firefox2.png');
}else{
    myImage.setAttribute('src','images/firefox-icon.png');
}
}
function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active");
  }

function addword(x){
    var userInput = document.getElementById('addtitle').value;
    document.getElementById("h1").innerHTML= "Mozilla is cool " + userInput; 
     
     
  }