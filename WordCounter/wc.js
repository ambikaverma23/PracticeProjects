let textbox = document.getElementById("textbox")

textbox.addEventListener('input',function(){
  var text = this.value;
  let char = text.length;

  document.getElementById("char").innerHTML = char;
  //for word space
  text = text.trim();
  let words = text.split(" ");
  let cleanlist = words.filter(function(el){
    return el!="";
  })
document.getElementById("word").innerHTML = cleanlist.length;
})