document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("feedback-form").addEventListener("submit", function (event) {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            event.preventDefault(); 
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".registration-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let program = document.getElementById("program").value;
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || phone === "" || program === "") {
            alert("Please fill in all required fields!");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        if (!validatePhone(phone)) {
            alert("Please enter a valid 10-digit phone number!");
            return;
        }

        alert("Registration successful!");


        form.reset(); 
    });

    function validateEmail(email) {
        let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        let re = /^[6-9]\d{9}$/; 
        return re.test(phone);
    }
});
