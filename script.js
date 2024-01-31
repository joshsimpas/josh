const btnIncrement = document.querySelector(".btn-increment");
const btndecrement = document.querySelector(".btn-decrement");
const textValue = document.querySelector("h2");
 
let counter = 0;

btnIncrement.addEventListener("click", function(){
    counter++;
    textValue.textContent = counter;
})
btndecrement.addEventListener("click", function(){

    counter--;
    textValue.textContent = counter;

});
btnchange.addEventListener("click", function(){
    textValue.style.backgroundcolor = "red";
});