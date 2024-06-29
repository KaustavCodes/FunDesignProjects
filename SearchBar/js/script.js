document.getElementById('bearchBtn').addEventListener('click', function(e) {
    e.preventDefault();
    var search = document.getElementById('searchTerm');
    search.classList.toggle('show');
});