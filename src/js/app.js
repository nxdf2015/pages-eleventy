window.onload=function(){
    
    color = () => Math.round(Math.random() *255)
    values = () => `rgb(${color()},${color()},${color()}`
    console.log(values())
    document.querySelector(".container").style.background= values()
}