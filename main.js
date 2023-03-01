
// _______________________________Typing Effect_____________________________
var t = new Typed(".typeing",{
  strings: ["Web Devloper and Coder","Programer","Coder","Web Devloper"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})



// _________________________________ Toggle Night Mode ________________________________

const header = document.querySelector("header");
const onoff = document.querySelector(".onoff");

let getMode = localStorage.getItem("mode");

if (getMode === "dark") {
  header.classList.remove("bgg");
  onoff.classList.add("dark-toggle");
}

onoff.addEventListener("click", () => header.classList.toggle("bgg"));

onoff.addEventListener("click", () =>{ 
  onoff.classList.toggle("dark-toggle")

  if (onoff.classList.contains("dark-toggle")) {
    return localStorage.setItem("mode", "dark");
  }
  localStorage.setItem("mode", "light");
  
});

// _________________________________ Toggle Night Mode End________________________________


// _________________________________ Toggle nav________________________________

let menuIcon = document.getElementById('x')
let navigation =  document.querySelector('.navigation')
let menuI = document.getElementById('menuI')
console.log(menuI)



menuIcon.addEventListener('click', () => {
   navigation.classList.toggle('showNav')
   menuI.classList.toggle('fa-xmark')

})
