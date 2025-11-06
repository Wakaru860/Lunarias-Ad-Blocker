const blockedDomains = [
  // Google / DoubleClick
  "*://ad.doubleclick.net/*",
  "*://pagead2.googlesyndication.com/*",
  "*://tpc.googlesyndication.com/*",
  "*://*.googleadservices.com/pagead/*",

  // Other ad networks
  "*://*.adnxs.com/*",
  "*://*.criteo.com/*",
  "*://*.mathtag.com/*",
  "*://*.bidr.io/*",
  "*://*.krxd.net/*",
  "*://*.bluekai.com/*",
  "*://*.adsrvr.org/*",
  "*://*.pubmatic.com/*",
  "*://*.openx.net/*",
  "*://*.rubiconproject.com/*",
  "*://*.indexexchange.com/*",
  "*://*.teads.tv/*",
  "*://*.spotxchange.com/*",
  "*://*.epom.com/*",
  "*://*.sovrn.com/*",
  "*://*.adform.net/*",
  "*://*.yieldmo.com/*",
  "*://*.gumgum.com/*",
  "*://*.triplelift.com/*",
  "*://*.revcontent.com/*",
  "*://*.appnexus.com/*",
  "*://*.connectad.io/*",
  "*://*.zedo.com/*",
  "*://*.adroll.com/*",

  // Social platform ads (paths only, as to not break sites)
  "*://*.tiktok.com/*/ads/*",
  "*://*.facebook.com/*/ads/*",
  "*://*.instagram.com/*/ads/*",
  "*://*.linkedin.com/*/ads/*",
  "*://*.twitter.com/*/ads/*"
];

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Blocked:", details.url);
    return { cancel: true };
  },
  { urls: blockedDomains },
  ["blocking"]
);

];

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Blocked:", details.url);
    return { cancel: true };
  },
  { urls: blockedDomains },
  ["blocking"]
);
