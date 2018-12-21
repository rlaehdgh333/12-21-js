var test = "3";
console.log(test);
$("#box1").css('background-color', 'yellow');
$("#box1").css({
    'background-color': 'yellow'
});
/* $("#box1").hover(function () {
    console.log("마우스 올라감");
}, function () {
    console.log("마우스 내려감");
}); */
//ES5
document.getElementById("box1").addEventListener("click",function(){
});
//ES6
document.querySelector("#box1").addEventListener("click",function(){
});
$("#box1").on("mouseenter",function(){
    console.log("마우스 올라감");
});
$("#box1").on("mouseleave",function(){
    console.log("마우스 내려감");    
});