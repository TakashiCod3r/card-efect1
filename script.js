var divs = document.querySelectorAll("div");

divs.forEach(function (el){
    el.addEventListener("mouseenter", function(){
        var painel =document.querySelector('.hover');
        painel.classList.toggle('hover');
        el.classList.toggle('hover');
    })
})