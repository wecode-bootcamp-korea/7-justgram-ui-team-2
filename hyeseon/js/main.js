const commentList = document.getElementsByClassName("feed-comment-list");
const commentInputList = document.getElementsByClassName("feed-comment-input");
const commentBtnList = document.getElementsByClassName(
  "feed-comment-input-button"
);

// Array.from(); => 배열로 바꿔줌
const commentArray = Array.from(commentList);
const commentInputArray = Array.from(commentInputList);
const commentBtnArray = Array.from(commentBtnList);

commentInputArray.forEach(content);

commentBtnArray.forEach((button, index) => {
  button.addEventListener("click", () => {
    const commentInput = commentInputList[index];
    const comment = commentList[index];

    const commentCard = document.createElement("div");
    commentCard.classList.add("feed-comment-card");

    const accountName = document.createElement("span");
    accountName.classList.add("highlight");
    accountName.textContent = "min.young";

    const commentContent = document.createElement("span");
    commentContent.textContent = commentInput.value;

    commentCard.append(accountName, commentContent);
    comment.append(commentCard);
  });
});
