//Hides the images. Logo to be more specific. This is injected only when ethio-jobs website is detected by the extension
function hide(){
var images = document.getElementsByTagName('img');
var svges = document.getElementsByTagName('svg');
if(images.length>0){
for(i=0;i<images.length;i++){
    images[i].style.display="none";
}
}
if(svges.length>0){
for(i=0;i<svges.length;i++){
    svges[i].style.display="none";
}
}
}
//Funciton executed
myVar = setInterval(hide, 1);
