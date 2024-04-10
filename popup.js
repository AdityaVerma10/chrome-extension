document.addEventListener("DOMContentLoaded", function () {
  let getTitleButton = document.getElementById("getTitleButton");
  let titleDisplay = document.getElementById("title");

  getTitleButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let activeTab = tabs[0];
      console.log(tabs[0]);
      let title = activeTab.title;
      titleDisplay.innerText = `Title :- ${title}`;
      activeTab.url =
        "https://docs.google.com/document/d/1NSl7sWaLFVeSNWTTyANxEuicPK67ydWtpe-ZcP7NgKE/edit#heading=h.harpj6yi5fg4";
    });
  });
});

let profiles = [
  "https://www.linkedin.com/in/dhattarwalaman/",
  "https://www.linkedin.com/in/hiteshchoudhary/",
  "https://www.linkedin.com/in/lakshayk12/",
  "https://www.linkedin.com/in/shradha-khapra/",
  "https://www.linkedin.com/in/gurucharan7/",
];

document.querySelector("#getLinkedindata").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "start", profiles });
});
