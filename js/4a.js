//4a Viktoriia Mikhailova = gallery.html
// All pictures and lightbox elements
const galleryPictures = document.querySelectorAll('.gallery-pictures');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closePhoto = document.getElementById('close-photo');


// loop, add click event listener to each picture
galleryPictures.forEach((galleryPictures) => {
  galleryPictures.addEventListener('click', (event) => {
    const fullImageSrc = event.target.getAttribute('full-size');
    lightboxImage.src = fullImageSrc;
    lightbox.style.display = 'flex'; // Show the lightbox
  });
});


// Close lightbox when clicking on close "button X" 
closePhoto.addEventListener('click', () => {
  lightbox.style.display = 'none'; 
});


