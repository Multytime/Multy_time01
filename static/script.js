document.addEventListener("DOMContentLoaded", function () {

    console.log("✅ MultyTime Loaded Successfully");

    // Smooth button click effect
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            this.style.transform = "scale(0.97)";

            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 150);

        });

    });

    // Auto focus first input
    const firstInput = document.querySelector("input");

    if (firstInput) {
        firstInput.focus();
    }

    // Auto Login Switch
    const autoLogin = document.querySelector("#autoLogin");

    if (autoLogin) {

        autoLogin.addEventListener("change", function () {

            if (this.checked) {
                localStorage.setItem("autoLogin", "true");
            } else {
                localStorage.setItem("autoLogin", "false");
            }

        });

        autoLogin.checked = localStorage.getItem("autoLogin") === "true";

    }

});

// Simple Message Function
function showMessage(message) {

    alert(message);

}
