const sections = document.getElementsByTagName("section");

[...sections].forEach((element) => {
    const question = element.querySelector("h2");
    const answer = element.querySelector("div");
    const icon = element.querySelector("img");
    question.addEventListener("click", () => {
        answer.classList.toggle("active");
        answer.classList.contains("active")
        ? icon.src = "./assets/images/icon-minus.svg"
        : icon.src = "./assets/images/icon-plus.svg";
    });
});