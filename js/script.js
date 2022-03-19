const input = document.querySelector(".pwd input");
const eye = document.querySelector(".pwd .bi-eye-slash");
const lock = document.querySelector(".pwd .bi-lock");
const overlay = document.querySelector(".pwd .overlay");

eye.addEventListener("click", function() {
    if (input.type === "password") {
        input.type = "text";
        eye.classList.remove("bi-eye-slash");
        eye.classList.add("bi-eye");
        setTimeout(function() {
            lock.getElementsByClassName.Color = "#111625";
        }, 500);
        overlay.classList.toggle("overlaycover");
    } else {
        input.type = "password";
        eye.classList.remove("bi-eye");
        eye.classList.add("bi-eye-slash");
        lock.style.Color = "#dbdbdb";

        overlay.classList.toggle("overlaycover");
    }
});