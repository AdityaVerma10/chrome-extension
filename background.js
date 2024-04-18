let profilesarr = [];

chrome.runtime.onMessage.addListener((request, sendResponse) => {
  if (request.action === "start") {
    profilesarr = request.profiles;
    processNextProfile();
  }
});

function processNextProfile() {
  if (profilesarr.length === 0) {
    console.log("All profiles processed.");
    return;
  }

  const nextProfile = profilesarr.shift();
  chrome.tabs.create({ url: nextProfile });
}

chrome.runtime.onMessage.addListener(async (request, sendResponse) => {
  if (request.action === "postData") {

    const response = await fetch("http://localhost:3000/api/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request.data),
    })
    .then((res) => res.json())
    .then((res) => {
      console.log("Data posted successfully:", res);
      processNextProfile();
    });
  }
});


