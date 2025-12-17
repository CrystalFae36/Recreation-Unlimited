const button = document.getElementById("accessibility-btn");
const popup = document.getElementById("accessibility-popup");
const toggleDark = document.getElementById("toggle-dark");
const toggleText = document.getElementById("toggle-text");
const toggleFont = document.getElementById("toggle-font");
const toggleMouse = document.getElementById("toggle-mouse")
const darkText = document.getElementById("accessibility-popup")
const readingMask = document.getElementById("reading-mask")
const move = document.getElementById("move");
const move2 = document.getElementById("move2");
const move3 = document.getElementById("move3");
const move4 = document.getElementById("move4");



let isDark = false;
let isLarge = false;
let isMouseDark = false;

button.addEventListener("click", () => {
  popup.style.display = popup.style.display === "block" ? "none" : "block";
});

toggleText.addEventListener("click", () => {
  document.body.classList.toggle("large-text");
});

toggleFont.addEventListener("click", () => {
  document.body.classList.toggle("dyslexia");
});

toggleMouse.addEventListener("click", () => {
 isLarge = true;
 if(isDark){
  document.html.classList.toggle("Large-Mouse-Dark")
  isMouseDark = true;
  console.log("mouse is large and dark mode")
 }
 else if(isMouseDark && !isDark)
 {
  document.html.classList.remove("Large-Mouse-Dark")
  document.html.classList.toggle("Large-Mouse")
  isMouseDark = false;
  isLarge = true;
 }
 else{
  document.html.classList.toggle("Large-Mouse")
 }

 if(document.body.classList.contains("Large-Mouse")){
  isLarge=true
 }
 else{
  isLarge=false
 }

 if(document.body.classList.contains("Large-Mouse-Dark"))
 {
  isMouseDark = true
 }
 else{
  isMouseDark = false
 }


 console.log("is mouse large")
 console.log(isLarge)
 console.log("is the mouse dark")
 console.log(isMouseDark)
});

toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkText.style.color="black"

if(isLarge){
document.body.classList.toggle("Large-Mouse-Dark")
document.body.classList.remove("Large-Mouse")
}
else if(isMouseDark && isDark)
 {
  document.body.classList.remove("Large-Mouse-Dark")
  document.body.classList.toggle("Large-Mouse")
  isMouseDark = false;
  isLarge = true;
 }


 if(document.body.classList.contains("dark-mode")){
  isDark = true
 }
 else(
  isDark = false
 )

 if(document.body.classList.contains("Large-Mouse")){
  isLarge=true
 }
 else{
  isLarge=false
 }

 if(document.body.classList.contains("Large-Mouse-Dark"))
 {
  isMouseDark = true
 }
 else{
  isMouseDark = false
 }
console.log("is dark mode")
console.log(isDark)
});

document.body.onpointermove = event => {
    const { clientY } = event;

    move.animate({
        top: `${clientY}px`
    
    }, {duration: 1, fill: "forwards"})

    move2.animate({
        top: `${clientY}px`
    
    }, {duration: 1, fill: "forwards"})

     move3.animate({
        top: `${clientY}px`
    
    }, {duration: 1, fill: "forwards"})

     move4.animate({
        top: `${clientY}px`
    
    }, {duration: 1, fill: "forwards"})

}

document.getElementById("hide").style.display = "none";

readingMask.addEventListener("click", () => {
  document.body.classList.toggle("reading-Mask");
  if(document.body.classList.contains("reading-Mask")){
    document.getElementById("hide").style.display = "contents";
  }
else{
  document.getElementById("hide").style.display = "none";
}  
});
