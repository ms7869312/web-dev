function validatelogin() {

    let user = document.getElementById("loginUsername").value.trim();
    let pass = document.getElementById("loginPassword").value.trim();

    let correctUser = "admin";
    let correctPass = "12345";

    if (user === "" || pass === "") {
        alert("Please fill all fields.");
        return false;  
    }

    if (user === correctUser && pass === correctPass) {
        alert("Login Successful!");
        return false;
    }

    alert("Invalid username or password.");
    return false;  
}
