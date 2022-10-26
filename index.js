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



//skill progress***********************************************************************

const skills=document.getElementById('my-skills')
function skill(icon,name,prog){
  const skill=document.createElement('div')
  skill.className='skill'
  const skillIcon=document.createElement('i')
  skillIcon.className=`fa-brands fa-${icon}`
  const skillName=document.createElement('h3')
  skillName.className='skill-name'
  skillName.innerText=name
  const progress=document.createElement('div')
  progress.className='skill-progres center'
  progress.setAttribute('progress',`${prog}%`)
  if (prog<30) {
    progress.classList.add('beginer')
  }else if(prog<60){
    progress.classList.add('meduim')
  }else{
    progress.classList.add('good')
  }
  progress.style.setProperty('--width',`${prog}%`)
  skill.appendChild(skillIcon)
  skill.appendChild(skillName)
  skill.appendChild(progress)
  return skill
}
const skillsArr=[
  {
    icon:'html5',
    name:'html',
    prog:50
  },{
  icon:'css3-alt',
  name:'css',
  prog:80
},{
  icon:'js',
  name:'js',
  prog: 80
},{
  icon:'react',
  name:'react',
  prog:70
},{
  icon:'bootstrap',
  name:'bootstrap',
  prog:50
},{
  icon:'node-js',
  name:'nodejs',
  prog:75
},{
  icon:'git-alt',
  name:'git',
  prog:90
},{
  icon:'mdb',
  name:'mysql',
  prog:75
},{
  icon:'mdb',
  name:'mongodb',
  prog:55
}]

skillsArr.forEach(elm=>{
  skills.appendChild(skill(elm.icon,elm.name,elm.prog))
})



//featchers list***********************************************************************
const featchers=document.getElementById('featchers-list')
function featcher(icon,name){
  const featcher=document.createElement('div')
  featcher.className='featcher'
  const iconName=document.createElement("i")
  iconName.className=icon
  const featcherName=document.createElement("h3")
  featcherName.className="featcher-name"
  featcherName.innerText=name
  const checkIcon=document.createElement("i")
  checkIcon.classList="fa-solid fa-check-double check"
  featcher.appendChild(iconName)
  featcher.appendChild(featcherName)
  featcher.appendChild(checkIcon)
  return featcher
}
const featchersArr=[
  {icon:"fa-regular fa-gem",name:"eficien website"},
  {icon:"fa-solid fa-rocket",name:"fast performance"},
  {icon:"fa-solid fa-desktop",name:"nice UI/UX"},
  {icon:"fa-brands fa-searchengin",name:"SEO friendly"},
  {icon:"fa-solid fa-user-secret",name:"security"},
  {icon:"fa-solid fa-mobile-screen-button",name:"responcive web design"},
  {icon:"fa-solid fa-universal-access",name:"accessibiliti"},
  {icon:"fa-solid fa-dolly",name:"fast delivry"}
]
featchersArr.forEach(elm=>{
  featchers.appendChild(featcher(elm.icon,elm.name))
})
