// Menu
const btnToggle = document.getElementById("btn-toggle")
const sectionList = document.getElementById("sections-list")

btnToggle.addEventListener("click", () => {
    sectionList.classList.toggle("none")
})


// Show more

const postList = document.querySelector(".post-list")
const showMoreButton = document.getElementById("show-more")

let showedPosts = 4

showMoreButton.addEventListener("click", () => {
    showedPosts += 4

    showPosts(showedPosts)
})

const showPosts = (quantity) => {

    const posts = document.querySelectorAll(".post")

    posts.forEach((post, index) => {
        if (index < quantity) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    })
}


showPosts(showedPosts)