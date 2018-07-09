var linkSign = document.querySelector(".signup"),
    linkLog = document.querySelector(".login"),
    formSign = document.querySelector("#signup"),
    formLog = document.querySelector("#login");
linkSign.addEventListener("click", function (e) {
    e.preventDefault(),
        formSign.classList.remove("none"),
        formLog.classList.add("none"),
        linkLog.classList.remove("active"),
        linkSign.classList.add("active");
});
linkLog.addEventListener("click", function (e) {
    e.preventDefault(),
        formSign.classList.add("none"),
        formLog.classList.remove("none"),
        linkLog.classList.add("active"),
        linkSign.classList.remove("active");
});
var buttonCountry = document.querySelector("#country"),
    blockCountry = document.querySelector(".country-box"),
    countryInput = document.getElementsByClassName("country-item");
buttonCountry.addEventListener("click", function (e) {
    e.preventDefault(),
        blockCountry.classList.remove("none");
        blockCountry.classList.add("flex");
});
for (var i = 0; i < countryInput.length; i++) {
    countryInput[i].addEventListener("change", function(e) {
        e.preventDefault(),
        blockCountry.classList.remove("flex");
        blockCountry.classList.add("none");
    });
};
var password = document.getElementById("password"),
    submit = document.getElementById("submit"),
    checkPass = document.getElementById("checkPass");
submit.addEventListener("click", function () {
    if (password.value !== checkPass.value) {
        alert("Проверьте пароли!");
        return false;
    }
});