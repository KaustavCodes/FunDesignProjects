let allContnt = document.querySelectorAll('.contentbox');

window.addEventListener('scroll', handleScroll);


function handleScroll() {
    let windowHeight = window.innerHeight;
    var triggerPoint = windowHeight / 5 * 4;
    allContnt.forEach((content) => {
        var contentTop = content.getBoundingClientRect().top;
        if (contentTop < triggerPoint) {
            content.classList.add('show');
        } else {
            content.classList.remove('show');
        }
    });
}