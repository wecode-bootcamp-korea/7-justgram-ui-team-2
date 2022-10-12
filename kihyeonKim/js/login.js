const ID = document.getElementById("input_Id");
const passWord = document.getElementById("input_passWord");
const loginBtn = document.getElementById("button");

ID.addEventListener("keyup", updateLoginButtonDOM);
passWord.addEventListener("keyup", updateLoginButtonDOM);

function updateLoginButtonDOM() {
  if (ID.value && ID.value.includes("@") && passWord.value.length >= 5) {
    loginBtn.disabled = false;
  } else {
    loginBtn.disabled = true;
  }
}
