
const share_content = document.querySelector(".share_content");
const share_btn = document.querySelector('.share');
const body = document.querySelector("#body");

body.addEventListener('click', () => {
    share_content.classList.add("hidden");
});

share_btn.addEventListener('click', (event) => {
    event.stopPropagation();
    share_content.classList.remove("hidden");
});

