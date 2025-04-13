
console.log("Portfolio ready to shine ✨");
// document.addEventListener('contextmenu', function(e) {
//     e.preventDefault();
//   });
//   document.addEventListener('contextmenu', function(e) {
//     alert("Right-click is disabled!");
//     e.preventDefault();                          ##disable right click
//   });
//   document.addEventListener('copy', function(e) {
//     e.preventDefault();  ## block copy
//     alert("Copying is disabled on this page.");
//   });
// Disable copy, paste, cut via keyboard
document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && ['c', 'v', 'x', 'a'].includes(e.key.toLowerCase())) {
      e.preventDefault();
      alert("ctrl key is disabled on this page.")
    }
  });