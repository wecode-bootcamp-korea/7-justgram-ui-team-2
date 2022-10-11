const commentInput = document.getElementsByClassName("new-comment-input");
const commentButton = document.getElementsByClassName("comment-button");
// const commentList = document.getElementsByClassName("feed-comment-list");

Array.from(commentButton).forEach((button, index) => {
  button.addEventListener("click", () => {
  const content = commentInput[index];
  const commentList = document.getElementsByClassName("feed-comment-list")[index];
  updateCommentListDom(content.value, commentList, 'raccoonboy ');
  content.value = "";
  });
});

Array.from(commentInput).forEach((input, index) => {
  input.addEventListener("keydown", (event) => {
    if (event.keyCode == 13) {
      const content = commentInput[index];
      const commentList = document.getElementsByClassName("feed-comment-list")[index];
      updateCommentListDom(content.value, commentList, 'raccoonboy ');
      content.value = "";
    }
  });
});

function updateCommentListDom(value, commentList, writer){
  const childElem = document.createElement("div");
  const nameSpan = document.createElement("span");
  const contentSpan = document.createElement("span");
  
  nameSpan.textContent = writer;
  contentSpan.textContent = value;

  childElem.append(nameSpan, contentSpan);
  
  commentList.append(childElem);
};

function getCommentList() {
  fetch("http://127.0.0.1:8081/data/comments.json")
    .then((res) => res.json())
    .then((pop) => {
      console.log(pop);
      pop.forEach((comment) => {
        const commentList = document.getElementsByClassName("feed-comment-list")[0];
        updateCommentListDom(comment.content, commentList, comment.nickname)
      });
    });
}
getCommentList();