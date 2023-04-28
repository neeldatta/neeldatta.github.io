function handleScroll() {
    const navbar = document.querySelector('nav');
    var view = document.getElementsByClassName('view')
    if (window.scrollY > 0 && view != "home") {
      navbar.classList.add('solid');
    } else {
      navbar.classList.remove('solid');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  window.history.pushState("object or string", "Title", "/new-url");


const card = document.getElementById("card")
card.addEventListener("click", flipCard)
function flipCard() {
    card.classList.toggle("flipCard");
}