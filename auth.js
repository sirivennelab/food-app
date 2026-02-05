// Default Admin Credentials
const adminUser = "admin";
const adminPass = "admin123";

// Login Function
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let error = document.getElementById("error");

    // Admin Login
    if (user === adminUser && pass === adminPass) {
        localStorage.setItem("role", "admin");
        window.location.href = "admin.html";
        return;
    }

    // Customer Login
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let validUser = users.find(u => u.username === user && u.password === pass);

    if (validUser) {
        localStorage.setItem("role", "customer");
        window.location.href = "index.html";
    } else {
        error.textContent = "Invalid credentials!";
    }
}

// Customer Registration
function register() {
    let user = document.getElementById("regUser").value;
    let pass = document.getElementById("regPass").value;
    let error = document.getElementById("error");

    if (!user || !pass) {
        error.textContent = "All fields required!";
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username: user, password: pass });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
    window.location.href = "login.html";
}
