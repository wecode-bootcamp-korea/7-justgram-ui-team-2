const id = document.getElementById("id_input"); //아이디 입력창
const pw = document.getElementById("passwd_input"); //비밀번호 입력창
const btn = document.getElementById("login_btn"); //로그인 버튼

function disabled() {
  if (id.value && pw.value) {
    btn.disabled = false;
    btn.style.backgroundColor = "#0095f6";
    btn.style.cursor = "pointer";
  } else {
    btn.disabled = true;
  }
}

id.addEventListener("keyup", disabled);
pw.addEventListener("keyup", disabled);
