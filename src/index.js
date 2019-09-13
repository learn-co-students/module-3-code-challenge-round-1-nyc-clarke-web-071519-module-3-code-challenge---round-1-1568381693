document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  
// ------------ Grab Elements off the DOM
  let imageId = 3425 //Enter the id from the fetched image here
  const image = document.querySelector('#image')
  const likeButton = document.querySelector('#like_button')
  const likes = document.querySelector('#likes')

  const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

  const likeURL = `https://randopic.herokuapp.com/likes/`
  
  const commentsURL = `https://randopic.herokuapp.com/comments/`
// ------------ Event Listeners to DOM Elements

likeButton.addEventListener('click', likeImage)


// ------------ Talk to Server Using Fetch

function getImageInfo() {
  fetch ('https://randopic.herokuapp.com/images/3425')
  .then(resp => resp.json())
  .then(data => { image.src = data.url

  })
}

function likeImage(allLikes) {
  fetch (`https://randopic.herokuapp.com/likes/`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(allLikes)
  })
  .then(resp => resp.json())
  .then(data => like(data))
}
// ------------ Logic/DOM Manipulation Functions

getImageInfo()

// optimistically increase likes
function likeImage(event) {
  if (event.target === likeButton)
  let updateLikeTotal = likes.append(allLikes)  

}






})