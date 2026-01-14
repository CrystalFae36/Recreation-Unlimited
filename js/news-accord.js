var acc = document.getElementsByClassName("news-accord");
var i;

for (i=0; i < acc.length; i++){
    acc[i].addEventListener("click", function(){
        this.classList.toggle("active");

        var news_container = this.nextElementSibling;
        if (news_container.style.maxHeight){
            news_container.style.maxHeight = null;
        } else {
            news_container.style.maxHeight = 800 + "px";
        }
    });
}