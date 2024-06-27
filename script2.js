document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("#nav-bar a");
  function navClick(event) {
    navLinks.forEach((link) => link.classList.remove("active"));
    event.currentTarget.classList.add("active");
  }
  navLinks.forEach((link) => {
    link.addEventListener("click", navClick);
  });
  const currentURL = window.location.href;
  navLinks.forEach((link) => {
    if (link.href === currentURL) {
      link.classList.add("active");
    }
  });
});

function formFun() {
  var fname = "first name: " + getValue("form-fname") + "\n";
  var lname = "Last name: " + getValue("form-lname") + "\n";
  var country = "Country: " + getValue("form-country") + "\n";
  var subject = "Subject: " + getValue("form-subject") + "\n";
  var final = "";
  final += fname + lname + country + subject;
  alert(final);
}

function idElement(argument){
	return document.getElementById(argument);
}

function loadIndex() {
  if (sessionStorage.getItem("loggedIn") === "true") {
    idElement("about-content").innerHTML = getItemFromLocal("p");
    idElement("skill-1").innerHTML = getItemFromLocal("skill1");
    idElement("skill-2").innerHTML = getItemFromLocal("skill2");
    idElement("skill-3").innerHTML = getItemFromLocal("skill3");
    idElement("skill-4").innerHTML = getItemFromLocal("skill4");
    idElement("skill-5").innerHTML = getItemFromLocal("skill5");
    idElement("skill-6").innerHTML = getItemFromLocal("skill6");
    idElement("skill-7").innerHTML = getItemFromLocal("skill7");
    idElement("skill-8").innerHTML = getItemFromLocal("skill8");
  } else {
    window.location.href = "login.html";
  }
}

function loadContact() {
  if (sessionStorage.getItem("loggedIn") === "true") {
    setTimeout(function () {
      document.getElementsByTagName("body").style.display = "block";
    }, 3000);
  } else {
    window.location.href = "login.html";
  }
}

function loadProject() {
  if (sessionStorage.getItem("loggedIn") === "true") {
    idElement("pro1-p").innerHTML = getItemFromLocal("pro1");
    idElement("pro2-p").innerHTML = getItemFromLocal("pro2");
    idElement("pro3-p").innerHTML = getItemFromLocal("pro3");
    idElement("pro4-p").innerHTML = getItemFromLocal("pro4");
    idElement("pro5-p").innerHTML = getItemFromLocal("pro5");
  } else {
    window.location.href = "login.html";
  }
}