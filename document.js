const movieCards = document.querySelectorAll('.movie-cards');
const playButtons = document.querySelectorAll('.play-buttons');


movieCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.querySelector('.play-buttons').style.visibility = 'visible';
  });

  card.addEventListener('mouseleave', () => {
    card.querySelector('.play-buttons').style.visibility = 'hidden';
  });
});
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
  function playTrailer(url) {
    window.open(url, '_blank');
  }
  