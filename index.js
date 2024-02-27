const top = document.querySelector('#go-top');
window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        top.classList.add("go-top");
        console.log('fr');
}else{
    top.classList.remove("go-top");
}
});

