const commentText = document.getElementsByClassName("comment");
const commentUploadBtn = document.getElementsByClassName("commentUpload");
const commentBox = document.getElementsByClassName("commentContent");
const commentUploadBtnarr = [];
const commentTextarr = [];
for (let element of commentUploadBtn) {
  commentUploadBtnarr.push(element);
}
for (let element of commentText) {
  commentTextarr.push(element);
}
function writeComment(content, writer) {
  var commentItem = document.createElement("li");
  commentItem.innerHTML =
    "<span style = font-weight:bold>" + writer + "</span>" + "  " + content;
  return commentItem;
}
for (let element of commentUploadBtn) {
  element.addEventListener("click", (content, user_ID) => {
    commentTextarr.forEach((comment, i) => {
      content = comment.value;
      if (content.length > 0) {
        const user_ID = "user_ID";
        commentBox[i].appendChild(writeComment(content, user_ID));
      }
      comment.value = "";
    });
  });
}
document.addEventListener("keyup", function (e) {
  if (e.which === 13) {
    const user_ID = "user_ID";
    commentTextarr.forEach((comment, i) => {
      content = comment.value;
      if (content.length > 0) {
        const user_ID = "user_ID";
        commentBox[i].appendChild(writeComment(content, user_ID));
      }
      comment.value = "";
    });
  }
});