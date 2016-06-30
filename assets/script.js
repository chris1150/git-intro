// Create a variable called msg to hold a new message
var msg = 'I am very dedicated to learing all of these new languages';
​
// Create a function to update the content of the element whose id attribute has a value of message
function updateMessage() {
​
​
  var el = document.getElementById('message');
​
​
  el.textContent = msg;
}
​
// Call the function
updateMessage();


