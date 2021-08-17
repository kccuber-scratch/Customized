if (document.cookie.includes("bigger=true")) {
  // additional stuff to be added ;)
}else{
  // don't show fonts

  // i'm too lazy to create an event listener so take this instead
  setInterval(function(){
document.getElementsByClassName("font-dropdown_comfortaa")[0].parentElement.remove()
document.getElementsByClassName("font-dropdown_comic")[0].parentElement.remove()
document.getElementsByClassName("font-dropdown_inter")[0].parentElement.remove()
document.getElementsByClassName("font-dropdown_manrope")[0].parentElement.remove()
  }, 10)
}