const sections = [...document.getElementsByTagName("section")];

let indexActiveSection = 0;

sections.forEach((element, index) => {
    const question = element.querySelector("h2");
    const answer = element.querySelector("div");
    const icon = element.querySelector("img");
    question.addEventListener("click", () => {
        if(indexActiveSection !== index){
            sections[indexActiveSection].querySelector("div").classList.remove("active");
            sections[indexActiveSection].querySelector("img").src = "./assets/images/icon-plus.svg";
        }
        indexActiveSection = index;
        answer.classList.toggle("active");
        answer.classList.contains("active")
        ? icon.src = "./assets/images/icon-minus.svg"
        : icon.src = "./assets/images/icon-plus.svg";
    });
});