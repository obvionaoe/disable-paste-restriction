const pasteBox = document.getElementById("paste-no-event");
pasteBox.onpaste = e => {
  e.preventDefault();
  return false;
};

// Alternative syntax:

// pasteBox.addEventListener('paste', e => {
//   e.preventDefault();
//   return false;
// });