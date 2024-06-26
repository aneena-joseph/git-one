let users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
];

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users));
}
var count=0;
function check(event) {
  event.preventDefault();

  const username = document.getElementById("user-name").value;
  const password = document.getElementById("pass-word").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let loggedIn = false;
  localStorage.setItem("loggedIn", "false");

  for (let i = 0; i < users.length; i++) {
    if (username === users[i].username && password === users[i].password) {
      loggedIn = true;
      break;
    }
  }

  if (loggedIn) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("count", count+1);
    document.getElementById("login-form").action = "index.html";
    document.getElementById("login-form").submit();
    alert("You are logged in.");
  } else if (username === "" || password === "") {
    alert("Fields cannot be blank.");
  } else {
    alert("Incorrect username or password.");
  }
}

function enter(event) {
  event.preventDefault();

  const username = document.getElementById("signup-user-name").value;
  const password = document.getElementById("signup-pass-word").value;

  if (username === "" || password === "") {
    alert("Fields cannot be blank.");
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.push({ username, password });

  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "login.html";
  alert("Sign up successful! You can now log in.");
}
