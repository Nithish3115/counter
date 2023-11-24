// set initial count
let count =0;
const span= document.querySelector("#value");
const btns = document.querySelectorAll(".btn");



btns.forEach(function (btn) {
    btn.addEventListener("click", function(e){
        const style = e.currentTarget.classList;
        if(style.contains('decrease')){
           
            count--;
        }else  if(style.contains('increase')){
            
            count++;
        }else  if(style.contains('reset')){
           
            count= 0;
        }

value.textContent = count;

if(count > 0){
    span.style.color='green';

}else if(count<0){
    span.style.color='red';
}
else{
    span.style.color='black';
}
    });
});