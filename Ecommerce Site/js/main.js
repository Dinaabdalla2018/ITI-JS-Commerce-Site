
var img_index = document.getElementById("Slider");
var img_slider = document.getElementById("single-slider") ;

function event_prev(){
    var index = Number(img_index.getAttribute('class'))-1;
        if(index < 1)
        index=3;
        
        img_index.setAttribute('class',index);
        img_slider.style.backgroundImage = "url(img/Slider/"+index+".jpg)";
}
function event_next(){
    var index = Number(img_index.getAttribute('class'))+1;
    if(index > 3)
    index=1;
    
    img_index.setAttribute('class',index);
    img_slider.style.backgroundImage = "url(img/Slider/"+index+".jpg)";
}
function slider_event(){
    var prev = document.querySelector(".carousel-control-prev");
    var next = document.querySelector(".carousel-control-next");
    
    prev.addEventListener('click',event_prev)
    next.addEventListener('click',event_next)



}
setInterval(function(){
     event_next();
 },7000)
slider_event();