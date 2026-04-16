document.addEventListener('DOMContentLoaded', () => {
    // Get all dropdown list items
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Get the main menu toggle checkbox
    const menuToggle = document.getElementById('menu-toggle');

    dropdowns.forEach(dropdown => {
        const mainLink = dropdown.querySelector('a:first-child');

        mainLink.addEventListener('click', (e) => {
            // Check if we are on a small screen (mobile/tablet width)
            // This threshold must match the CSS media query
            if (window.innerWidth <= 768) {
                e.preventDefault(); // Stop navigation on mobile click
                
                // Toggle the 'active' class on the clicked dropdown
                dropdown.classList.toggle('active');

                // Close other open dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
            }
        });
    });

    // Close the entire menu when any link (main or sub) is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            // Uncheck the hamburger menu toggle to close the whole menu
            menuToggle.checked = false;
            
            // Close all dropdowns
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        });
    });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}