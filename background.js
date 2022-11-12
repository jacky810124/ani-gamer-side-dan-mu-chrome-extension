function hideSideDanMu() {
  const sideDanMuElement = document.querySelector(".subtitle");
  if (sideDanMuElement) {
    sideDanMuElement.remove();
  }
  const videoElement = document.querySelector(".videoframe");
  if (videoElement) {
    videoElement.style.width = "100%";
  }
}

chrome.action.onClicked.addListener((tab) => {
  const isAniGamer = tab.url.startsWith(
    "https://ani.gamer.com.tw/animeVideo.php"
  );
  if (isAniGamer) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: hideSideDanMu,
    });
  }
});
