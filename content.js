function extractProfileData() {
  const name = document.querySelector(".text-heading-xlarge").innerText;
  const location =
    document.querySelector(".mt2").children[2]?.children[0].innerText;
  if (!location) {
    document.querySelector(".mt2").children[1].children[0].innerText;
  }
  const about = document.querySelectorAll(".ph5")[1].innerText;
  const bio = document.querySelector(".text-body-medium").innerText;
  const followerCount = document.querySelectorAll(".t-bold")[0].innerText;
  const connectionCount = document.querySelectorAll(".t-bold")[1].innerText;
  const url = window.location.href;

  return { name, location, bio, followerCount, connectionCount, url, about };
}

window.addEventListener("load", () => {
  setTimeout(() => {
    const data = extractProfileData();
    chrome.runtime.sendMessage({ action: "postData", data });
  }, 2000);
});


chrome.storage.local.get(["likeCount", "commentCount"], function (data) {
  let likeCount = data.likeCount;
  let commentCount = data.commentCount;
  
  function likePosts() {
    for (let i = 0; i < likeCount; i++) {
      setTimeout(() => {
        let username = document.querySelectorAll(
          ".update-components-actor__title"
        )[i].children[0].children[0].innerText;
        document
          .querySelector(`[aria-label="React Like to ${username}’s post"]`)
          .click();
      }, 2000);
    }
  }

  function commentOnPosts() {
    for (let i = 0; i < commentCount; i++) {

      setTimeout(()=>{
        let username = document.querySelectorAll(
          ".update-components-actor__title"
        )[i].children[0].children[0].innerText;

        document
          .querySelector(`[aria-label="Comment on ${username}’s post"]`)
          .click();
  
        setTimeout(() => {
          document.querySelectorAll(".comments-comment-box")[i].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].innerText =
            "CFBR";
        }, 500);
  
        setTimeout(() => {
          document
            .querySelector(`[aria-label="Post comment on ${username}’s post"]`)
            .click();
        }, 1000);

      },2000)
    }
  }

  setTimeout(likePosts, 1000);

  
  setTimeout(commentOnPosts, 5000);
});
