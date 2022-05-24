// Shows Happy photo when happy button clicked
document.getElementById("Happy").addEventListener("click", function Happy() {
    document.getElementById("Photo").src = "Happy.Jpeg"
})

// Shows Sad photo when sad button clicked
document.getElementById("Sad").addEventListener("click", function Sad() {
    document.getElementById("Photo").src = "Sad.jpeg"
})

// Shows Suprised photo when suprised button clicked
document.getElementById("Suprised").addEventListener("click", function Suprised() {
    document.getElementById("Photo").src = "Suprised.jpeg"
})

// Shows Scared photo when scared button clicked
document.getElementById("Scared").addEventListener("click", function Scared() {
    document.getElementById("Photo").src = "Scared.jpeg"
})

// Shows Bored photo when bored button clicked
document.getElementById("Bored").addEventListener("click", function Bored() {
    document.getElementById("Photo").src = "Bored.jpeg"
})

// Resets photo when reset button clicked
document.getElementById("Reset").addEventListener("click", function Reset() {
    document.getElementById("Photo").src = "Default.jpeg"
})

// Defines photo array
let photoArray = [
    "Happy.Jpeg",
    "Sad.jpeg",
    "Suprised.jpeg",
    "Scared.jpeg",
    "Bored.jpeg",
]

// Get Random Button
let Random = document.getElementById('Random')

// Add event listener
Random.addEventListener('click', function Random() {
    // Get random image
    var randomImage = photoArray[Math.floor(Math.random() * photoArray.length)]
    // Get photo
    let Photo = document.getElementById('Photo');
    // Change src attribute
    Photo.src = randomImage
})