var loc = window.location.href,
index = loc.indexOf('#');

if (index != -1) {
  var req = loc.slice(index);
  
  //these check which page the user was trying to access from the old guide and redirects them to the new version.
  //if there is no new version of the page, they are sent to the site's index.
  
  if (req.indexOf("/beforestarting") != -1) {
    window.location = loc.slice(0, index - 1) + "/gettingstarted/beforestarting";
  } else if (req.indexOf("/accessingrcm") != -1) {
    window.location = loc.slice(0, index - 1) + "/gettingstarted/accessingrcm";
  } else if (req.indexOf("/sdsetup") != -1) {
    window.location = loc.slice(0, index - 1) + "/gettingstarted/sdsetup";
  } else if (req.indexOf("/safetyprecautions") != -1) {
    window.location = loc.slice(0, index - 1) + "/gettingstarted/safetyprecautions";
  } else if (req.indexOf("/final") != -1) {
    window.location = loc.slice(0, index - 1) + "/gettingstarted/aftersetup";
  } else if (req.indexOf("/configuringhekate") != -1) {
    window.location = loc.slice(0, index - 1) + "/usingcfw/hekate";
  } else if (req.indexOf("/usingcfw") != -1) {
    window.location = loc.slice(0, index - 1) + "/";
  } else if (req.indexOf("/manualupdate") != -1) {
    window.location = loc.slice(0, index - 1) + "/usingcfw/manualupgrade";
  } else if (req.indexOf("/manualchoidowngrade") != -1) {
    window.location = loc.slice(0, index - 1) + "/usingcfw/manualchoiupgrade";
  } else if (req.indexOf("/troubleshooting") != -1) {
    window.location = loc.slice(0, index - 1) + "/troubleshooting";
  } else if (req.indexOf("/faq") != -1) {
    window.location = loc.slice(0, index - 1) + "/faq";
  } else if (req.indexOf("/credits") != -1) {
    window.location = loc.slice(0, index - 1) + "/credits";
  } else {
    window.location = loc.slice(0, index - 1) + "/";
  }
}