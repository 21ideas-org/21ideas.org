document.querySelectorAll('.card').forEach(card => {
    let isDescriptionVisible = false;

    card.addEventListener('touchstart', function (event) {
        event.preventDefault(); // Prevent default touch behavior

        // Get the description element
        const description = card.querySelector('.hover-text');

        // Toggle the visibility of the description
        if (isDescriptionVisible) {
            description.style.display = 'none';
        } else {
            description.style.display = 'block';
        }
        
        // Update the visibility state
        isDescriptionVisible = !isDescriptionVisible;
    });
});
