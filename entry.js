require("./style.css");
document.write(require('./content.js'));
document.write("<input />");

// var sideEffectNode = document.createElement('div');
// sideEffectNode.textContent = 'Side effect pos si tio?';
// document.body.appendChild(sideEffectNode);
//
// // Remove the most recently-added <div> so that when the code runs again and
// // adds a new <div>, we don't end up with duplicate divs.
// if (module.hot) {
//    module.hot.accept();
//    module.hot.dispose(function() {
//     sideEffectNode.parentNode.removeChild(sideEffectNode);
//   });
// }
