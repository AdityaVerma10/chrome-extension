function extractProfileData() {

    const name = document.querySelector('.text-heading-xlarge').innerText;
    const location = document.querySelector('.mt2').children[2]?.children[0].innerText
    if(!location){
      document.querySelector('.mt2').children[1].children[0].innerText
    }
    const about = document.querySelectorAll(".ph5")[1].innerText
    const bio = document.querySelector('.text-body-medium').innerText; 
    const followerCount = document.querySelectorAll('.t-bold')[0].innerText;
    const connectionCount = document.querySelectorAll('.t-bold')[1].innerText;
    const url =window.location.href
    
    return { name, location, bio, followerCount, connectionCount ,url,about};
  }
  

  window.addEventListener('load', () => {
    setTimeout(()=>{
      const data = extractProfileData();
      chrome.runtime.sendMessage({ action: "postData", data });

    },2000)
  });

 

  
