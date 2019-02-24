var loc = window.location.href,
index = loc.indexOf('#');

if (index != -1) {
  window.location = loc.slice(0, index) + loc.slice(index + 2);
}