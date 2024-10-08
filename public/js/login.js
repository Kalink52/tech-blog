const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById("email-login").value.trim();
  const password = document.getElementById("password-login").value.trim();
  console.log({ username, password });

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .getElementById("login-form")
  .addEventListener("click", loginFormHandler);
