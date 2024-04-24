const toggle=document.querySelector("#toggleDark")
const toggle2=document.querySelector("#toggleLight")
const body=document.querySelector("body")
toggle.addEventListener("click",function(){

  let local=localStorage["color"]
  if(local){
    document.body.style.background=local
  }

  // if(local==="toggle"){
  //   toggle.display.style="none"
  //   toggle2.display.style="block"
  // }
  // if(local==="toggle2"){
  //   toggle.display.style="block"
  //   toggle2.display.style="none"
  // }

  if(body.classList.toggle("!light")){

    body.style.background="white"
    body.style.color="black"
    body.style.transition="2s"
    localStorage["color"]="black"
  }else{
    body.classList.toggle("!moon")
    body.style.background="black"
    body.style.color="white"
    body.style.transition="2s"
    localStorage["color"]="white"
  }
})
toggle2.addEventListener("click",function(){

  this.classList.toggle("light")
})

toggle.classList.remove("d-none")
toggle2.classList.add("d-none")
function ClickMe(){
  console.log("toggle.value")
}
