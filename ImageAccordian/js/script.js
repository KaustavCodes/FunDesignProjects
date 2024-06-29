var allPanels = document.getElementsByClassName('panel');

//create a click function on .panel dom element
// Loop through the selected elements
for (var i = 0; i < allPanels.length; i++) {
    // Add click event listener to each element
    allPanels[i].addEventListener('click', function() {
        // Define what happens when a .div element is clicked
        document.querySelector('.active').classList.remove('active');

        // Add the active class to the clicked element
        this.classList.add('active');
    });
}