let users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
];

const text = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            eum voluptate aut quos sint eius pariatur dignissimos suscipit
            provident iure rem est, minima explicabo optio sed officia tempore
            nam reprehenderit praesentium numquam asperiores cupiditate, nihil
            fugiat aliquid! Minima rem illum, voluptates inventore natus cumque
            asperiores doloremque voluptatibus ea sequi facilis cupiditate
            delectus veritatis iusto aperiam magni minus? Eveniet vero earum
            neque deleniti quasi maxime consectetur illum quo ipsam nisi. Ipsa
            cupiditate temporibus, quis accusamus cumque voluptas quibusdam id
            dolores perspiciatis magni voluptates nesciunt ut optio quod eveniet
            laborum sequi reiciendis quas in dolore labore incidunt? Nesciunt
            eos est rerum eius, facere dolorum soluta temporibus voluptate
            voluptatem quaerat accusantium perspiciatis aliquam reiciendis modi
            tempore non! Alias nam labore quae culpa voluptate amet officiis
            delectus ducimus minus cum velit, quisquam natus cumque voluptas
            praesentium tempore nostrum autem iste fuga est odit. Temporibus
            voluptatum odio aspernatur dolorem veritatis tenetur hic ab aut
            debitis.`;
const txt1 = `This project involved designing a responsive website for a local restaurant. The site adapts
          seamlessly to various screen sizes, ensuring a consistent user experience across devices. Key
          features include an interactive menu, online reservations, and customer reviews.`;
const txt2 = `Developed a mobile application for a fitness startup. The app tracks user workouts, provides
          personalized fitness plans, and integrates with wearable devices to monitor health metrics. The
          project included both iOS and Android versions with a sleek, user-friendly interface.`;

const txt3 = `Created a robust backend API for an e-commerce platform. The API handles user authentication,
          product catalog management, order processing, and payment integration. It is built with
          scalability in mind, supporting high traffic and complex transactions.`;
const txt4 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus rem cum id
            obcaecati voluptatum accusantium voluptate. Earum perferendis quisquam et doloribus magnam hic id 
            eveniet maxime ipsa, soluta iusto. Libero est deleniti sit quo nostrum amet, nulla reiciendis alias, 
            blanditiis doloribus ducimus illum! Hic culpa labore magnam minima quos?.`;

const txt5 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus rem cum id
            obcaecati voluptatum accusantium voluptate. Earum perferendis quisquam et doloribus magnam hic id 
            eveniet maxime ipsa, soluta iusto. Libero est deleniti sit quo nostrum amet, nulla reiciendis alias, 
            blanditiis doloribus ducimus illum! Hic culpa labore magnam minima quos?.`;

localStorage.setItem("p", text);
localStorage.setItem("s1", "HTML");
localStorage.setItem("s2", "CSS");
localStorage.setItem("s3", "Javascript");
localStorage.setItem("s4", "Bootstrap");
localStorage.setItem("s5", "Python");
localStorage.setItem("s6", "Java");
localStorage.setItem("s7", "C");
localStorage.setItem("s8", "C++");

localStorage.setItem("pro1", txt1);
localStorage.setItem("pro2", txt2);
localStorage.setItem("pro3", txt3);
localStorage.setItem("pro4", txt4);
localStorage.setItem("pro5", txt5);

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users));
}

var count = 0;

function check(event) {
  event.preventDefault();

  const username = document.getElementById("user-name").value;
  const password = document.getElementById("pass-word").value;

  let users = JSON.parse(localStorage.getItem("users")) || [];

  let loggedIn = false;
  sessionStorage.setItem("loggedIn", "false"); //made change

  for (let i = 0; i < users.length; i++) {
    if (username === users[i].username && password === users[i].password) {
      loggedIn = true;
      break;
    }
  }

  if (loggedIn) {
    sessionStorage.setItem("loggedIn", "true");
    localStorage.setItem("count", count + 1);
    document.getElementById("login-form").action = "index.html";
    document.getElementById("login-form").submit();
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
