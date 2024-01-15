const toggleAccordion = (element) => {
    element.classList.toggle("active");

    const detailContent = element.querySelector(".detail-content");
    detailContent.style.display = element.classList.contains("active") ? "block" : "none";

    const toggleIcon = element.querySelector(".toggle-icon");
    toggleIcon.src = element.classList.contains("active")
        ? "/assets/images/icon-minus.svg"
        : "/assets/images/icon-plus.svg";
};