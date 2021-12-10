let homebtn = document.querySelector(".home")
let aboutbtn = document.querySelector(".about")
let servicebtn = document.querySelector(".service")
let contactbtn = document.querySelector(".contact")


let hometab = document.querySelector(".homes")
let abouttab = document.querySelector(".abouts")
let servicetab = document.querySelector(".services")
let contacttab = document.querySelector(".contacts")

abouttab.classList.add("d-none")
servicetab.classList.add("d-none")
contacttab.classList.add("d-none")


homebtn.addEventListener("click", function () {
    servicetab.classList.add("d-none")
    contacttab.classList.add("d-none")
    abouttab.classList.add("d-none")
    hometab.classList.remove("d-none")
})
aboutbtn.addEventListener("click", function () {
    hometab.classList.add("d-none")
    servicetab.classList.add("d-none")
    contacttab.classList.add("d-none")
    abouttab.classList.remove("d-none")
})
servicebtn.addEventListener("click", function () {
    hometab.classList.add("d-none")
    abouttab.classList.add("d-none")
    contacttab.classList.add("d-none")
    servicetab.classList.remove("d-none")
})
contactbtn.addEventListener("click", function () {
    abouttab.classList.add("d-none")
    servicetab.classList.add("d-none")
    hometab.classList.add("d-none")
    contacttab.classList.remove("d-none")
})