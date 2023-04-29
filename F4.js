var nav = document.querySelector("nav.card")
console.log(nav)
function cadastro (event){
    event.preventdefault
console.log("entrou")
    if( nav.style.display === "none"){
        nav.style.display = "grid"
    }else{
        nav.style.display = "none"
    }
    
}

