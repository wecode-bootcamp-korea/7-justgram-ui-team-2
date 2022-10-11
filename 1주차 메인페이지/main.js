const commentInput = document.getElementsByClassName("new-comment-input");
const commentButton = document.getElementsByClassName("comment-button");
const commentList = document.getElementsByClassName("feed-comment-list");

Array.from(commentButton).forEach((button, index) => {
  button.addEventListener("click", () => {
  const content = commentInput[index];
  
  const childElem = document.createElement("div");
  const nameSpan = document.createElement("span");

  nameSpan.className = "comment-name";
  nameSpan.textContent = "raccoonboy ";

  childElem.append(nameSpan, content.value);

  commentList[index].appendChild(childElem);
  content.value = "";
  });
 
});

Array.from(commentInput).forEach((input, index) => {
  input.addEventListener("keydown", (event) => {
    if (event.keyCode == 13) {
      const content = commentInput[index];
      const childElem = document.createElement("div");
      const nameSpan = document.createElement("span");
      
      nameSpan.className = "comment-name";
      nameSpan.textContent = "raccoonboy ";

      childElem.append(nameSpan, content.value);

      commentList[index].appendChild(childElem);
      content.value = "";
    }
  });
});

function updateCommentListDom(content, commentList, writer){
  const childElem = document.createElement("div");
  const nameSpan = document.createElement("span");
  
  nameSpan.className = "comment-name";
  nameSpan.textContent = writer;

  childElem.append(nameSpan, content.value);

  commentList[index].appendChild(childElem);
};