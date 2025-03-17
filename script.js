document.getElementById("registrationForm").addEventListener("submit", function(event) {
    let name = document.getElementById("studentName").value;
    let programme = document.getElementById("programme").value;
    let serialNumber = document.getElementById("serialNumber").value;

    if (name === "" || programme === "" || serialNumber === "") {
        alert("Please fill all the fields.");
        event.preventDefault();
    }
});
