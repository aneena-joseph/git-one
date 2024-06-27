let users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
];
const ABOUTTEXT = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
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
const PROJECT1 = `This project involved designing a responsive website for a local restaurant. The site adapts
          seamlessly to various screen sizes, ensuring a consistent user experience across devices. Key
          features include an interactive menu, online reservations, and customer reviews.`;
const PROJECT2 = `Developed a mobile application for a fitness startup. The app tracks user workouts, provides
          personalized fitness plans, and integrates with wearable devices to monitor health metrics. The
          project included both iOS and Android versions with a sleek, user-friendly interface.`;
const PROJECT3 = `Created a robust backend API for an e-commerce platform. The API handles user authentication,
          product catalog management, order processing, and payment integration. It is built with
          scalability in mind, supporting high traffic and complex transactions.`;
const PROJECT4 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus rem cum id
            obcaecati voluptatum accusantium voluptate. Earum perferendis quisquam et doloribus magnam hic id 
            eveniet maxime ipsa, soluta iusto. Libero est deleniti sit quo nostrum amet, nulla reiciendis alias, 
            blanditiis doloribus ducimus illum! Hic culpa labore magnam minima quos?.`;
const PROJECT5 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus rem cum id
            obcaecati voluptatum accusantium voluptate. Earum perferendis quisquam et doloribus magnam hic id 
            eveniet maxime ipsa, soluta iusto. Libero est deleniti sit quo nostrum amet, nulla reiciendis alias, 
            blanditiis doloribus ducimus illum! Hic culpa labore magnam minima quos?.`;
storeItemToLocal("p", ABOUTTEXT);
storeItemToLocal("skill1", "HTML");
storeItemToLocal("skill2", "CSS");
storeItemToLocal("skill3", "Javascript");
storeItemToLocal("skill4", "Bootstrap");
storeItemToLocal("skill5", "Python");
storeItemToLocal("skill6", "Java");
storeItemToLocal("skill7", "C");
storeItemToLocal("skill8", "C++");
storeItemToLocal("pro1", PROJECT1);
storeItemToLocal("pro2", PROJECT2);
storeItemToLocal("pro3", PROJECT3);
storeItemToLocal("pro4", PROJECT4);
storeItemToLocal("pro5", PROJECT5);

function getItemFromLocal(key) {
    return localStorage.getItem(key);
}

function storeItemToLocal(key,value) {
    localStorage.setItem(key, value);
}

function getValue(argument){
    return document.getElementById(argument).value;
}

function idElement(argument){
	return document.getElementById(argument);
}

if (!getItemFromLocal("users")) {
    storeItemToLocal("users", JSON.stringify(users));
}

function check(event) {
  event.preventDefault();
  const username = getValue("user-name");
  const password = getValue("pass-word");
  let users = JSON.parse(getItemFromLocal("users")) || [];
  let loggedIn = false;
  sessionStorage.setItem("loggedIn", "false");
  for (let i = 0; i < users.length; i++) {
    if (username === users[i].username && password === users[i].password) {
      loggedIn = true;
      break;
    }
  }
  if (loggedIn) {
    sessionStorage.setItem("loggedIn", "true");
    idElement("login-form").action = "index.html";
    idElement("login-form").submit();
    sessionStorage.setItem("count", "0");
  } else if (username === "" || password === "") {
    alert("Fields cannot be blank.");
  } else {
    alert("Incorrect username or password.");
  }
}

function enter(event) {
  event.preventDefault();
  const username = getValue("signup-user-name");
  const password = getValue("signup-pass-word");
  if (username === "" || password === "") {
    alert("Fields cannot be blank.");
  }
  let users = JSON.parse(getItemFromLocal("users")) || [];
  users.push({ username, password });
  storeItemToLocal("users", JSON.stringify(users));
  window.location.href = "login.html";
  alert("Sign up successful! You can now log in.");
}