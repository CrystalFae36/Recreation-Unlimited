const button = document.getElementById("accessibility-btn");
const popup = document.getElementById("accessibility-popup");
const toggleContrast = document.getElementById("toggle-contrast");
const toggleText = document.getElementById("toggle-text");
const toggleFont = document.getElementById("toggle-font");
const toggleMouse = document.getElementById("toggle-mouse")
const contText = document.getElementById("accessibility-popup")
const readingMask = document.getElementById("reading-mask")
const move = document.getElementById("move");
const move2 = document.getElementById("move2");
const move3 = document.getElementById("move3");
const move4 = document.getElementById("move4");

button.addEventListener("click", () => {
  popup.style.display = popup.style.display === "block" ? "none" : "block";
});

toggleText.addEventListener("click", () => {
  let bigText = sessionStorage.getItem("bigText");
  if(bigText != "1"){
    sessionStorage.setItem("bigText", "1");
     document.body.classList.add("large-text");
  }

  else{
    sessionStorage.setItem("bigText", "0");
    document.body.classList.remove("large-text");
  }
 
});

toggleMouse.addEventListener("click", () => {
    let mouse = sessionStorage.getItem("mouse");
    let cont = sessionStorage.getItem("cont");
    let contMouse = sessionStorage.getItem("contMouse");

 if(cont == "1" & contMouse == "1"){
    document.body.classList.remove("Large-Mouse-Cont")
 }
 else if(cont == "1"){
  document.body.classList.add("Large-Mouse-Cont");
    document.body.classList.remove("Large-Mouse");
  sessionStorage.setItem("contMouse", "1");
  sessionStorage.setItem("mouse", "0");
 }
 else if(contMouse == "1" && cont == "0")
 {
  document.body.classList.remove("Large-Mouse-Cont");
  document.body.classList.add("Large-Mouse");
  sessionStorage.setItem("contMouse", "0");
  sessionStorage.setItem("mouse", "1");
 }
 else if(mouse!="1"){
  document.body.classList.add("Large-Mouse");
  sessionStorage.setItem("mouse", "1");
 }
 else{
    document.body.classList.remove("Large-Mouse");
    sessionStorage.setItem("mouse", "0")
 }

 if(document.body.classList.contains("Large-Mouse")){
sessionStorage.setItem("mouse", "1");
 }
 else{
sessionStorage.setItem("mouse", "0");
 }

 if(document.body.classList.contains("Large-Mouse-Cont"))
 {
  sessionStorage.setItem("contMouse", "1");
 }
 else{
sessionStorage.setItem("contMouse", "0");
 }
});

toggleContrast.addEventListener("click", () => {
    let mouse = sessionStorage.getItem("mouse");
    let cont = sessionStorage.getItem("cont");
    let contMouse = sessionStorage.getItem("contMouse");

    if(cont != "1"){
        sessionStorage.setItem("dark","1")
          document.body.classList.add("dark-mode");
  darkText.style.color="black"
    }
    else{
        sessionStorage.setItem("dark","0")
        document.body.classList.remove("dark-mode");
    }


if(mouse == "1"){
document.body.classList.add("Large-Mouse-Dark")
document.body.classList.remove("Large-Mouse")
sessionStorage.setItem("mouse", "0")
sessionStorage.setItem("darkMouse", "1")
}
else if(  dark == "1" && darkMouse == "1" )
 {
  document.body.classList.remove("Large-Mouse-Dark")
  document.body.classList.add("Large-Mouse")
  sessionStorage.setItem("darkMouse", "0")
  sessionStorage.setItem("mouse", "1")
 }
});

toggleFont.addEventListener("click", () => {
  let font = sessionStorage.getItem("font");
  if(font != "1"){
    sessionStorage.setItem("font", "1");
    document.body.classList.add("dyslexia");
  }
  else{
    sessionStorage.setItem("font", "0");
    document.body.classList.remove("dyslexia")
  }
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
  let readMask = sessionStorage.getItem("readMask");
 if(readMask != "1"){
    sessionStorage.setItem("readMask", "1");
    
      document.body.classList.add("reading-Mask");
      document.getElementById("hide").style.display = "contents";
  }
  else{
    sessionStorage.setItem("readMask", "0");
      document.getElementById("hide").style.display = "none";
  }

console.log(readMask);
});

// On page load, check if it should be active
window.onload = () => {
  if (sessionStorage.getItem("readMask") === "1") {
    document.body.classList.add("reading-Mask");
    document.getElementById("hide").style.display = "contents";
  }
  if (sessionStorage.getItem("bigText") === "1") {
    document.body.classList.add("large-text");
  }
  if(sessionStorage.getItem("font") === "1"){
    document.body.classList.add("dyslexia");
  }
  if(sessionStorage.getItem("dark") === "1"){
        document.body.classList.add("dark-mode");
  }
  if(sessionStorage.getItem("mouse")=== "1"){
        document.body.classList.add("Large-Mouse");
  }
  if(sessionStorage.getItem("darkMouse") === "1")
  {
        document.body.classList.add("Large-Mouse-Dark");
  }
}; 