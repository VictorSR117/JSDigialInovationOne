var tem = document.querySelector("#mode-selector").addEventListener("click", () => {
    let temMode = document.getElementById("mode-selector");
    document.body.classList.toggle("dark-mode");
    document.querySelector("#foot").classList.toggle("dark-mode");
    temMode.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        temMode.innerHTML = "Ligth Mode";
        document.getElementById("page-title").innerHTML = "Dark Mode On";
    }
    else {
        temMode.innerHTML = "Dark Mode";
        document.getElementById("page-title").innerHTML = "Ligth Mode On";
    }
});