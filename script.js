// Event handler for filter button click
function handleButtonClick(filterButton, icon) {
    // Toggle the presence of 'filter-button-active' class on 'filterButton'
    filterButton.classList.toggle('filter-button-active');
    // Toggle the presence of 'filter-button-icon-active' class on 'icon'
    icon.classList.toggle('filter-button-icon-active');
}

// Event handler for Animation
// Check if 'filter-button-active' class is NOT present in 'filterButton'
// Toggle the presence of 'button-hover-animation' class on 'icon' based on the result
function handleButtonHover(filterButton, icon) {
    icon.classList.toggle('button-hover-animation', !filterButton.classList.contains('filter-button-active'));
}

// Removes the Animation
function handleButtonLeave(icon) {
    icon.classList.remove('button-hover-animation');
}

// Function to toggle filterButtons and icons
function toggleFilter(filterButtons, icons) {
    for (let i = 0; i < filterButtons.length; i++) {
        // Activate/Desactivate button & add/remove the classes for it
        filterButtons[i].addEventListener("click", handleButtonClick.bind(null, filterButtons[i], icons[i]));
        // add the Animation to the button when hover if button is not activated 
        filterButtons[i].addEventListener("mouseenter", handleButtonHover.bind(null, filterButtons[i], icons[i]));
        // Removes the Animation when mouse leave
        filterButtons[i].addEventListener("mouseleave", handleButtonLeave.bind(null, icons[i]));
    }
}

window.onload = function () {
    const filterButtons = document.getElementsByClassName('filter-button');
    const icons = document.getElementsByClassName('filter-button-icon');

    toggleFilter(filterButtons, icons);
};
