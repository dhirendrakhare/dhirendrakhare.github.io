function loadHTML(id, url){
  fetch(url)
    .then(response => response.text())
    .then(data => document.getElementById(id).innerHTML = data)
    .catch(err => console.error(`Error loading ${url}:`, err));
}

window.addEventListener('DOMContentLoaded', () => {
  loadHTML('header-placeholder', 'header.html');
  loadHTML('footer-placeholder', 'footer.html');
});
