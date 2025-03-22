document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("feedbackForm").addEventListener("submit", function (event) {
        let fullName = document.getElementById("fullName").value.trim();
        let email = document.getElementById("email").value.trim();
        let feedback = document.getElementById("feedback").value.trim();

        if (fullName === "" || email === "" || feedback === "") {
            alert("Please fill in all fields before submitting.");
            event.preventDefault(); // Form submit hone se rokne ke liye
        }
    });
});
