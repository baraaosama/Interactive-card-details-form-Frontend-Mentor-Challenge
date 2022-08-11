const inputs = Array.from(document.querySelectorAll("input"))
const nameOnCard = document.querySelector(".name")
const name = document.querySelector("#name")
const numberOnCard = document.querySelector("#numbers")
const number = document.querySelector("#number")
const nameError = document.querySelector(".nameError")
const numberError = document.querySelector(".numberError")
const monthOncard = document.querySelector(".month")
const mm = document.querySelector("#mm")
const yearOncard = document.querySelector(".year")
const yy = document.querySelector("#yy")
const dateError = document.querySelector(".dateError")
const cvcOnCard = document.querySelector(".cvc")
const cvcInput = document.querySelector("#cvc-input")
const cvcError = document.querySelector(".cvcError")
const confirm = document.querySelector("#confirm");
const cardForm = document.querySelector(".card-form");
const successMessage = document.querySelector(".success-message")
const continu = document.querySelector(".continue")
let errorFlag = false;

//Name vlidation

name.addEventListener("keyup", function () {
    nameOnCard.textContent = name.value.toUpperCase();
})
name.addEventListener("blur", function () {
    reg = /^[a-z ]+$/ig
    if (name.value == "") {
        nameError.innerHTML = "can't be blank";
        name.style.cssText = "border-color:hsl(0, 100%, 66%);";
        errorFlag = true;
    } else if (!reg.test(name.value)) {
        nameError.innerHTML = "Wrong answer,Characters only";
        name.style.cssText = "border-color:hsl(0, 100%, 66%);";
        errorFlag = true;
    }
    else {
        nameError.innerHTML = "";
        name.style.cssText = "border-color:#eee;"
        errorFlag = flase
    }
})

//Number Validate

number.addEventListener("keyup", function () {
    num = number.value + "0".repeat(16 - number.value.length);
    numberOnCard.textContent = num
    numberOnCard.textContent = `${num.slice(0, 4)} ${num.slice(4, 8)} ${num.slice(8, 12)} ${num.slice(12, 16)}`;
})
number.addEventListener("blur", function () {
    if (number.value == "") {
        numberError.innerHTML = "can't be blank";
        number.style.cssText = "border-color:hsl(0, 100%, 66%);"
        errorFlag = true
    } else {
        number.style.cssText = "border-color:#eee;"
        numberError.innerHTML = "";
        errorFlag = false
    }
})

//Month Validate

mm.addEventListener("keyup", function () {
    month = "0".repeat(2 - mm.value.length) + mm.value;
    monthOncard.textContent = month;
})
mm.addEventListener("blur", function () {
    if (mm.value == "") {
        dateError.innerHTML = "Can't be blank";
        mm.style.cssText = "border-color:hsl(0, 100%, 66%);"
        errorFlag = true
    } else if (mm.value > 12) {
        mm.value = "";
        dateError.innerHTML = "Wrong input";
        month = "0".repeat(2 - mm.value.length) + mm.value;
        monthOncard.textContent = month;
        mm.style.cssText = "border-color:hsl(0, 100%, 66%);"
        errorFlag = true
    } else {
        dateError.innerHTML = "";
        month = "0".repeat(2 - mm.value.length) + mm.value;
        monthOncard.textContent = month;
        mm.style.cssText = "border-color:#eee;"
        errorFlag = false
    }
})

//Year Validate

yy.addEventListener("keyup", function () {
    yearOncard.textContent = yy.value;
})
yy.addEventListener("blur", function () {
    if (yy.value == "") {
        dateError.innerHTML = "Can't be blank";
        yy.style.cssText = "border-color:hsl(0, 100%, 66%);"
        errorFlag = true
    } else {
        dateError.innerHTML = "";
        yearOncard.textContent = yy.value;
        yy.style.cssText = "border-color:#eee;"
        errorFlag = false
    }
})

//CVC Validate

cvcInput.addEventListener("keyup", function () {
    cvc = "0".repeat(3 - cvcInput.value.length) + cvcInput.value;
    cvcOnCard.textContent = cvc

})
cvcInput.addEventListener("blur", function () {
    if (cvcInput.value == "") {
        cvcError.innerHTML = "can't be blank";
        cvcInput.style.cssText = "border-color:hsl(0, 100%, 66%);"
        errorFlag = true
    } else {
        cvcError.innerHTML = ""
        cvc = "0".repeat(3 - cvcInput.value.length) + cvcInput.value;
        cvcOnCard.textContent = cvc
        cvcInput.style.cssText = "border-color:#eee;"
        errorFlag = false
    }
})

//Onsubmit Validate

function validateOnSubmit() {
    inputs.map(function (e) {
        if (e.value == "") {
            if (e.id == "name") {
                nameError.innerHTML = "can't be blank";
                name.style.cssText = "border-color:hsl(0, 100%, 66%);"
            } else if (e.id == "number") {
                numberError.innerHTML = "can't be blank";
                number.style.cssText = "border-color:hsl(0, 100%, 66%);"
            } else if (e.id == "mm") {
                dateError.innerHTML = "can't be blank";
                mm.style.cssText = "border-color:hsl(0, 100%, 66%);"
            } else if (e.id == "yy") {
                dateError.innerHTML = "can't be blank";
                yy.style.cssText = "border-color:hsl(0, 100%, 66%);"
            } else if (e.id == "cvc-input") {
                cvcError.innerHTML = "can't be blank";
                cvcInput.style.cssText = "border-color:hsl(0, 100%, 66%);"
            }
            errorFlag = true;
        }
    })
    if (errorFlag == false) {
        cardForm.style.display = "none";

        successMessage.style.display = "flex"
    }
}
confirm.addEventListener("click", validateOnSubmit);
continu.addEventListener("click", function () {
    window.location.reload()
})