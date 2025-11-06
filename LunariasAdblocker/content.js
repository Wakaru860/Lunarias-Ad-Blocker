function removeAds() {
  const adSelectors = [
    "[id*='ad']",
    "[class*='ad']",
    "[class*='sponsor']"
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
