// script.js

const correctPassword = "Maggie123";

function checkPassword() {

    const enteredPassword =
        document.getElementById("password").value;

    if (enteredPassword === correctPassword) {

        document.getElementById("loginBox").style.display = "none";

        document.getElementById("pdfContainer").style.display = "block";

    } else {

        document.getElementById("error").innerText =
            "Wrong Password";
    }
}

// Close when tab/app changes
window.addEventListener("blur", () => {

    document.body.innerHTML =
        "<h1 style='text-align:center;margin-top:100px;'>Session Closed</h1>";

    setTimeout(() => {

        window.close();

    }, 1000);
});

window.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        document.body.innerHTML =
            "<h1 style='text-align:center;margin-top:100px;'>Access Terminated</h1>";

        setTimeout(() => {

            window.close();

        }, 1000);
    }
});