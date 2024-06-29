document.getElementById('menu_icon').addEventListener('click', function (e) {
    e.preventDefault();
    let pageContainer = document.getElementsByClassName('container')[0];
    pageContainer.classList.toggle('reveal_menu');
});