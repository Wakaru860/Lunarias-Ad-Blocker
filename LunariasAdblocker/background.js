const blockedDomains = [
*://*doubleclick.net/*
*://*googleadservices.com/*
*://*googlesyndication.com/*
*://*adnxs.com/*
*://*criteo.com/*
*://*.amazon-adsystem.com/*
*://*.marketgid.com/*
*://*.mathtag.com/*
*://*.bidr.io/*
*://*.krxd.net/*
*://*.bluekai.com/*
*://*.adsrvr.org/*
*://*.taboola.com/*
*://*.outbrain.com/*
*://*.pubmatic.com/*
*://*.openx.net/*
*://*.rubiconproject.com/*
*://*.indexexchange.com/*
*://*.teads.tv/*
*://*.spotxchange.com/*
*://*.epom.com/*
*://*.sovrn.com/*
*://*.adform.net/*
*://*.yieldmo.com/*
*://*.gumgum.com/*
*://*.triplelift.com/*
*://*.revcontent.com/*
*://*.appnexus.com/*
*://*.connectad.io/*
*://*.zedo.com/*
*://*.adroll.com/*
*://*.tiktok.com/*   # TikTok ads/tracking
*://*.facebook.com/*  # Meta/Facebook Pixel & ads
*://*.instagram.com/* # Meta ads
*://*.linkedin.com/*  # LinkedIn Insight Tag
*://*.twitter.com/*   # Twitter ads

  
];

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    console.log("Blocked:", details.url);
    return { cancel: true };
  },
  { urls: blockedDomains },
  ["blocking"]
);
