console.log("start js")
//set active list item***********************************************************************
const linksList=document.querySelectorAll(".nav-bar>.drop-down>.nav-list>.list-item>.section-link")
const setActive=(elm)=>{
    linksList.forEach(listElm=>{
        listElm.removeAttribute("active")
    })
    elm.setAttribute("active","")
}
linksList.forEach(elm=>{
    elm.onclick=(e)=>{
        setActive(elm)
    }
})
const content=document.getElementById("content")
content.onscroll=(e)=>{
    setActive(linksList[Math.floor((content.scrollTop+100)/content.offsetHeight)])
}


//nav bar drop down menu***********************************************************************
const dropDownToggle=document.getElementById("drop-down-toggle")
const navDropDown=document.getElementById("nav-drop-down")
dropDownToggle.onclick=(e)=>{
    navDropDown.classList.toggle("show")
    dropDownToggle.classList.toggle("bi-list")
    dropDownToggle.classList.toggle("bi-x")
}
document.onclick=(e)=>{
    if(e.target!==dropDownToggle && navDropDown.classList.contains("show")){
        navDropDown.classList.remove("show")
        dropDownToggle.classList.add("bi-list")
        dropDownToggle.classList.remove("bi-x")
    }
}


//services slider***********************************************************************
const servicesSlider=document.getElementById("services-slider" )
const servicesSliderToggle=document.querySelectorAll(".services-content>.bi")
servicesSliderToggle[1].onclick=(e)=>{
    servicesSlider.scrollBy({left:servicesSlider.offsetWidth,top:0,behavior:"smooth"})
}
servicesSliderToggle[0].onclick=(e)=>{
    servicesSlider.scrollBy({left:-servicesSlider.offsetWidth,top:0,behavior:"smooth"})
}
servicesSlider.onscroll=()=>{
    servicesSlider.scrollLeft===0?servicesSliderToggle[0].classList.add("hide"):servicesSliderToggle[0].classList.remove("hide")
    servicesSlider.scrollLeft===(servicesSlider.scrollWidth-servicesSlider.offsetWidth)?servicesSliderToggle[1].classList.add("hide"):servicesSliderToggle[1].classList.remove("hide")
}
showToggle()
window.onresize=(e)=>{
    showToggle()
}
function showToggle(){
    if(servicesSlider.scrollWidth>servicesSlider.offsetWidth){
        servicesSliderToggle.forEach(elm=>{
            elm.classList.remove("hide")
        })
    }else{
        servicesSliderToggle.forEach(elm=>{
            elm.classList.add("hide")
        })
    }
}

