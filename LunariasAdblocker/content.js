function removeAds() {
const adSelectors = [
  "div[id*='ad']",
  "div[class*='ad']",
  "iframe[src*='ads']",
  "div[class*='sponsor']"
];


  adSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.remove());
  });
}

// Run once on page load
removeAds();

// Observe for dynamically added ads
const observer = new MutationObserver(removeAds);
observer.observe(document.body, { childList: true, subtree: true });
