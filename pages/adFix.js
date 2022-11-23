const body = document.querySelector('body');
const googleAd = document.querySelector('ins[data-anchor-status]');

setInterval(() => {
  if (googleAd.getAttribute("data-anchor-status") === "displayed") {
    body.style.paddingTop = "100px";
  } else if (googleAd.getAttribute("data-anchor-status") === "dismissed") {
    body.style.paddingTop = "0";
  }
}, 0);

console.log("Testing");