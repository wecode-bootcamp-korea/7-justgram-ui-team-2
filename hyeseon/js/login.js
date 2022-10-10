const email = document.getElementById("login-email-input"); //아이디 입력창
const pw = document.getElementById("login-passwd-input"); //비밀번호 입력창
const loginBtn = document.getElementById("login-btn"); //로그인 버튼

function disabled() {
  if (email.value && pw.value) {
    loginBtn.disabled = false;
    loginBtn.style.backgroundColor = "#0095f6";
    loginBtn.style.cursor = "pointer";
  } else {
    loginBtn.disabled = true;
  }
}

email.addEventListener("keyup", disabled);
pw.addEventListener("keyup", disabled);
