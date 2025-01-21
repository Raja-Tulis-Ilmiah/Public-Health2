// Contoh animasi sederhana untuk tombol saat di-hover
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
    });
    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });
});
