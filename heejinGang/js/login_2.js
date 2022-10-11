const loginId = document.querySelector(".id-input"); //아이디 입력창
const loginPw = document.querySelector(".pw-input"); //비밀번호 입력창
const btn = document.querySelector(".login-button"); //로그인 버튼

function btnAble() {
  let idValue = loginId.value;
  let pwValue = loginPw.value;
  
  if(idValue.length >= 1 && pwValue.length >= 1) {
    btn.style.backgroundColor = "#0095F6";
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}
loginId.addEventListener("keyup", btnAble);
loginPw.addEventListener("keyup", btnAble);