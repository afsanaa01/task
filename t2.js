let price = document.querySelector("#price");
let month = document.querySelector("#month");
let faiz = document.querySelector("#faiz");
let calculate = document.querySelector("#calculate");
let clean = document.querySelector("#clean");
let common = document.querySelector(".common")
let info = document.querySelector(".info")
let dt = document.querySelector(".dt")
let date = new Date();


calculate.addEventListener("click", function myFunction() {
    for (let i = 1; i < parseInt(month.value); i++) {
        var para = document.createElement("p");
        para.innerText = ((parseInt(price.value) - (parseInt(price.value) % parseInt(month.value))) / parseInt(month.value)) + ((parseInt(price.value) * parseInt(faiz.value)) / 100) + " $"
        document.body.appendChild(para);
        para.className = "card col-3 text-center"
        info.appendChild(para)
        var time = document.createElement("p");
        time.innerText = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
        document.body.appendChild(time);
        time.className = "date text-center"
        para.appendChild(time)
    }
    var para = document.createElement("p");
    para.innerText = (((parseInt(price.value) - (parseInt(price.value) % parseInt(month.value))) / parseInt(month.value)) + ((parseInt(price.value) * parseInt(faiz.value)) / 100)) + (parseInt(price.value) % parseInt(month.value)) + " $"
    document.body.appendChild(para);
    para.className = "card col-3 text-center"
    info.appendChild(para)
    var time = document.createElement("p");
    time.innerText = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear()
    document.body.appendChild(time);
    time.className = "date text-center"
    para.appendChild(time)
    
    common.innerText = "Toplam: " + (((parseInt(price.value) - (parseInt(price.value) % parseInt(month.value))) / parseInt(month.value)) + ((parseInt(price.value) * parseInt(faiz.value)) / 100)) * parseInt(month.value) + " $"
    price.value = "";
    month.value = "";
    faiz.value = "";
});

clean.addEventListener("click", function () {
    price.value = "";
    month.value = "";
    faiz.value = "";
    info.classList.add("d-none");
    common.classList.add("d-none");
});
