function bgchange(color) {
     
    document.body.style.backgroundColor = color;
   
    let txt =document.getElementsByClassName("text");
    if(color == '#FFF033' || color == '#09F114'){
        for(let elm of txt){
            elm.style.color= "black";
        }
    }else{
        for(let elm of txt){
            elm.style.color= "white";
    }
}

}


