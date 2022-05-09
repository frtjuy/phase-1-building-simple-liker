// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
  const heart = document.getElementsByClassName("like-glyph")
  const noHeart = document.getElementsByClassName("activated-heart")
function clickHeart()  {
  document.addEventListener('click', function(e) {
    if(e.target.className === "like-glyph")  {mimicServerCall()
    .then(function() {
      e.target.className = "activated-heart"
      e.target.innerHTML = '♥'
    })
    .catch(function () {
      modal.classList.remove("hidden")
      setTimeout(function() {
        modal.classList.add("hidden")
      }, 3000)
    })
  }})
}
function clickNoHeart() {
  document.addEventListener('click', function(e) {
    if(e.target.className === 'activated-heart') {
      e.target.className = "like-glyph"
      e.target.innerHTML = '♡'
    }
  })
}
document.addEventListener('DOMContentLoaded', function() {
  modal.classList.add("hidden")
  clickHeart()
  clickNoHeart()
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
