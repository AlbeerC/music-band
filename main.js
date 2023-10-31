// Menu
const btnToggle = document.getElementById("btn-toggle")
const sectionList = document.getElementById("sections-list")

btnToggle.addEventListener("click", () => {
    sectionList.classList.toggle("none")
})