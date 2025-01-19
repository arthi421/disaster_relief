// Toggle the content visibility when the plus icon is clicked
function toggleContent(iconElement) {
    const stateBox = iconElement.closest('.state-box');
    const content = stateBox.querySelector('.state-content');

    // Toggle content visibility
    if (content.style.display === 'block') {
        content.style.display = 'none'; // Hide content
        iconElement.textContent = '+'; // Change icon back to plus
    } else {
        content.style.display = 'block'; // Show content
        iconElement.textContent = '-'; // Change icon to minus
    }
}

// Optional: Automatically close other open boxes when one is expanded
function closeOtherBoxes(currentIcon) {
    const allStateBoxes = document.querySelectorAll('.state-box');

    allStateBoxes.forEach((box) => {
        const icon = box.querySelector('.toggle-icon');
        const content = box.querySelector('.state-content');

        // Close other boxes if they are open
        if (icon !== currentIcon && content.style.display === 'block') {
            content.style.display = 'none';
            icon.textContent = '+';
        }
    });
}

// Enhance toggleContent to include closing other boxes
function toggleContentWithAutoClose(iconElement) {
    closeOtherBoxes(iconElement);
    toggleContent(iconElement);
}

// Assign event listeners to all toggle icons
document.addEventListener('DOMContentLoaded', () => {
    const toggleIcons = document.querySelectorAll('.toggle-icon');

    toggleIcons.forEach((icon) => {
        icon.addEventListener('click', () => toggleContentWithAutoClose(icon));
    });
});
