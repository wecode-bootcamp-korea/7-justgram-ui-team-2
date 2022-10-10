const commentList = document.getElementsByClassName("feed-comment-list");
const commentInputList = document.getElementsByClassName("feed-comment-input");
const commentBtnList = document.getElementsByClassName(
  "feed-comment-input-button"
);

// Array.from(); => 배열로 바꿔줌
const commentArray = Array.from(commentList);
const commentInputArray = Array.from(commentInputList);
const commentBtnArray = Array.from(commentBtnList);

//업데이트 함수
function UpdateCommentsDOM(value, comment, writer) {
  const commentCard = document.createElement("div");
  commentCard.classList.add("feed-comment-card");

  const accountName = document.createElement("span");
  accountName.classList.add("highlight");
  accountName.textContent = writer;

  const commentContent = document.createElement("span");
  commentContent.textContent = value;

  commentCard.append(accountName, commentContent);
  comment.append(commentCard);
}

// 버튼 click 이벤트
commentBtnArray.forEach((button, index) => {
  button.addEventListener("click", () => {
    const commentInput = commentInputList[index];
    const comment = commentList[index];

    UpdateCommentsDOM(commentInput.value, comment, "min.young");
    commentInput.value = "";
  });
});

// enter이벤트
commentInputArray.forEach((content, index) => {
  content.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      const commentInput = commentInputList[index];
      const comment = commentList[index];

      UpdateCommentsDOM(commentInput.value, comment, "min.young");
      commentInput.value = "";
    }
  });
});

function getComments() {
  fetch("../data/comments.json")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      json.forEach((comments) => {
        const comment = commentList[comments.Feedindex];
        UpdateCommentsDOM(
          comments.commentContent,
          comment,
          comments.accountName
        );
      });
    });
}
getComments();
