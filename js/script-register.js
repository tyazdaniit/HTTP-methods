const form = document.querySelector(".form");
const firstname = document.querySelector(".firstName");
const lastname = document.querySelector(".lastname");
const password = document.querySelector(".password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let userData = {
    firstname: firstname.value,
    lastname: lastname.value,
    password: password.value,
  };

  fetch("https://methods-78649-default-rtdb.firebaseio.com/users.json", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => {
      clearData();
      console.log(res.status);
    })
    .catch((err) => console.log(err.status));
});

function clearData() {
  firstname.value = "";
  lastname.value = "";
  password.value = "";
}
