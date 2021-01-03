document.getElementById("btn").addEventListener("click", send);

function send() {
  const email = document.getElementById("email");
  const iconError = document.getElementById("icon-error");
  if (!email.checkValidity()) {
    document.getElementById("msg").innerHTML = "Please provide a valid email";
    if (!iconError.classList.contains("show")) {
      iconError.classList.add("show");
    }
  } else {
    document.getElementById("msg").innerHTML = "";
    if (iconError.classList.contains("show")) {
      iconError.classList.remove("show");
    }
  }
}
