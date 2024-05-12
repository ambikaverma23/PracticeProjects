function changeBG(color){
  document.body.style.backgroundColor = color
  let txt = document.getElementsByClassName("txt")
  if(color=='#000000'){
    for(let el of txt){
      el.style.color = "white"
    }
  }else{
    for(let el of txt){
      el.style.color = "black"
    }
  }
}