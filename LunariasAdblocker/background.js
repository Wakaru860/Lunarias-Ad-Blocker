const blockedDomains = [
  "*://*.doubleclick.net/*",
  "*://*.googlesyndication.com/*",
  "*://*.adservice.google.com/*",
  "*://*.ads.yahoo.com/*"
];

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Blocked:", details.url);
    return { cancel: true };
  },
  { urls: blockedDomains },
  ["blocking"]
);
