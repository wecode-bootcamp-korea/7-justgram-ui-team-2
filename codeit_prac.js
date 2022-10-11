// fetch('https://learn.codeit.kr/api/members')
//     .then((response) => response.text())
//     .then((result) => { console.log(result); });
    
const member = {
  name : 'Alice',
  email : 'jerry@codeitmall.kr',
  department : 'marketing', 
};

fetch('https://learn.codeit.kr/api/members/2',{
  method : 'DELETE',
})
    .then((response) => response.text())
    .then((result) => { console.log(result); });


  