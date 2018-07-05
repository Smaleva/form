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
