const buttonSubmit = document.querySelector("#submit");
const selectors = document.querySelectorAll(".rating");
const rating = document.querySelector("#rating");
const rating_section = document.querySelector(".rating-section");
const selection = document.querySelector(".selection");
const voteSubmit = document.querySelector("#vote");

let selectedItem = 0;
buttonSubmit.addEventListener('click', () => {
    rating_section.classList.add("hidden")
    selection.classList.remove("hidden")
    rating.innerHTML = selectedItem
})

selectors.forEach(selector => {
    selector.addEventListener('click', () => {
        selectedItem = selector.textContent;
    })
})

voteSubmit.addEventListener('click', () => {
    rating_section.classList.remove("hidden")
    selection.classList.add("hidden");
})