const comment = document.getElementsByClassName("comment_Input");
const comment_Btn = document.getElementsByClassName("comment_Button");
const comment_Box = document.getElementsByClassName("comment_Field");

const commentarr = Array.from(comment);
const comment_Btnarr = Array.from(comment_Btn);

function writeComment(writer, content) {
  var commentItem = document.createElement("li");
  commentItem.innerHTML =
    "<span style = font-weight:bold>" + writer + " </span>" + content;
  return commentItem;
}

comment_Btnarr.forEach((element, idx) => {
  element.addEventListener("click", (content, writer) => {
    content = commentarr[idx].value;
    if (content) {
      const user_ID = writer;
      comment_Box[idx].appendChild(writeComment(user_ID, content));
    }
    comment.value = "";
  });
});

commentarr.forEach((element, idx) => {
  element.addEventListener("keyup", function (e) {
    if (e.which === 13 && element.value) {
      const user_ID = "user_ID";
      comment_Box[idx].appendChild(writeComment(user_ID, element.value));
      element.value = "";
    }
  });
});

function getCommentList() {
  fetch("../data/comments.json")
    .then((res) => res.json())
    .then((json) => {
      json.forEach((comment) => {
        const commentList =
          document.getElementsByClassName("comment_Field")[comment.feedIndex];
        commentList.appendChild(writeComment(comment.writer, comment.content));
      });
    });
}

getCommentList();
