window.addEventListener('DOMContentLoaded', (event) => {
  Array.prototype.slice.call(
    document.getElementsByTagName('input'))
    .forEach(function (el) {
      el.setAttribute("onpaste", "{}")
  });
  document.removeEventListener("paste")
});