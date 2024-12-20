let currentPage = 1;
const totalPages = 3;
const pages = document.querySelectorAll('.container.page');

function goToNextPage() {
    if (currentPage === totalPages) {
        resetStack();
        currentPage = 1;
    } else {
        // Ensure styles are fully applied before transitions
        setTimeout(() => {
            const currentPageElement = pages[currentPage - 1];
            currentPageElement.style.transform = 'translateX(-50%)';
            currentPageElement.style.opacity = '0.5';
            currentPageElement.style.zIndex = 1;

            const nextPageElement = pages[currentPage % totalPages];
            nextPageElement.style.opacity = '1';
            nextPageElement.style.transform = 'translateX(0)';
            nextPageElement.style.zIndex = 3;

            const previousPageIndex = (currentPage - 2 + totalPages) % totalPages;
            pages[previousPageIndex].style.opacity = '0.0';
            pages[previousPageIndex].style.zIndex = 2;

            currentPage++;
        }, 0); // Delay ensures browser processes styles
    }
}


// Reset all pages to the initial stacked configuration
function resetStack() {
    pages.forEach((page, index) => {
        page.style.transform = 'translateX(0)'; // Center all pages
        page.style.opacity = index === 0 ? '1' : '0.7'; // Only make Page 1 fully visible
        page.style.zIndex = index === 0 ? '3' : '2'; // Bring Page 1 to the front, others behind
    });
}

// Add click event listener to change pages
document.addEventListener('click', goToNextPage);


document.addEventListener('click', function (event) {
    // Scroll to top if not clicking on navigation elements
    if (event.button === 0 && !event.target.closest('.page-navigation')) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// Add right mouse button event for going to the previous page
document.addEventListener('contextmenu', function (event) {
    event.preventDefault(); // Prevent default right-click context menu
    goToPreviousPage();
});

// Left-click event for navigating to the next page
document.addEventListener('click', function (event) {
    if (event.button === 0 && event.target.closest('.page-navigation')) {
        goToNextPage();
    }
});

function goToPreviousPage() {
    if (currentPage === 1) {
        // If on the first page, wrap around to the last page
        currentPage = totalPages;
    } else {
        // Decrease the current page
        currentPage--;
    }

    // Handle page transitions
    const currentPageElement = pages[currentPage - 1];
    const nextPageIndex = currentPage % totalPages;
    const previousPageIndex = (currentPage - 2 + totalPages) % totalPages;

    // Style the current page
    currentPageElement.style.opacity = '1';
    currentPageElement.style.transform = 'translateX(0)';
    currentPageElement.style.zIndex = 3;

    // Style the next page
    pages[nextPageIndex].style.opacity = '0.5';
    pages[nextPageIndex].style.transform = 'translateX(50%)';
    pages[nextPageIndex].style.zIndex = 1;

    // Style the previous page
    pages[previousPageIndex].style.opacity = '0.7';
    pages[previousPageIndex].style.transform = 'translateX(0)';
    pages[previousPageIndex].style.zIndex = 2;
}




// Check if we're on page 3
if (document.body.classList.contains('page-3')) {
    // Get all the level spans from the <h3> tag
    const levelSpans = document.querySelectorAll('.level');

    // Add event listeners for hover events
    levelSpans.forEach(span => {
        span.addEventListener('mouseover', function() {
            const level = this.getAttribute('data-level'); // Get the level (A, B, C, or D)

            // Clear previous highlights by removing all highlight classes
            document.querySelectorAll('.level-A, .level-B, .level-C, .level-D').forEach(cell => {
                cell.classList.remove('highlight-A', 'highlight-B', 'highlight-C', 'highlight-D');
            });

            // Highlight the relevant rows based on the level
            const rowsToHighlight = document.querySelectorAll(`.level-${level}`);
            rowsToHighlight.forEach(row => {
                row.classList.add(`highlight-${level}`);
            });
        });

        span.addEventListener('mouseout', function() {
            const level = this.getAttribute('data-level'); // Get the level (A, B, C, or D)

            // Remove the highlight class when mouse leaves
            const rowsToUnhighlight = document.querySelectorAll(`.level-${level}`);
            rowsToUnhighlight.forEach(row => {
                row.classList.remove(`highlight-${level}`);
            });
        });
    });
}

// Check if we're on page 3
if (document.body.classList.contains('page-3')) {
    // Get all the level spans from the <h3> tag
    const levelSpans = document.querySelectorAll('.level');

    // Add event listeners for hover events
    levelSpans.forEach(span => {
        span.addEventListener('mouseover', function() {
            const level = this.getAttribute('data-level'); // Get the level (A, B, C, or D)

            // Clear previous highlights by removing all highlight classes
            document.querySelectorAll('.level-A, .level-B, .level-C, .level-D').forEach(cell => {
                cell.classList.remove('highlight-A', 'highlight-B', 'highlight-C', 'highlight-D');
            });

            // Highlight the relevant rows based on the level
            const rowsToHighlight = document.querySelectorAll(`.level-${level}`);
            rowsToHighlight.forEach(row => {
                row.classList.add(`highlight-${level}`);
            });
        });

        span.addEventListener('mouseout', function() {
            const level = this.getAttribute('data-level'); // Get the level (A, B, C, or D)

            // Remove the highlight class when mouse leaves
            const rowsToUnhighlight = document.querySelectorAll(`.level-${level}`);
            rowsToUnhighlight.forEach(row => {
                row.classList.remove(`highlight-${level}`);
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Function to add the shake effect
    function addShakeEffect(element) {
        // Find the icon and text within the element
        const icon = element.querySelector('i');
        

        // Add event listener for mouseover (hover)
        element.addEventListener('mouseover', function() {
            // Add the shake class to both the icon and the text
            icon.classList.add('shake');
            

            // Remove the shake class after the animation ends (1 second)
            setTimeout(() => {
                icon.classList.remove('shake');
            }, 1000); // Duration of the shake effect (1000ms)
        });
    }

    // Select all contact elements (container for phone, email, and LinkedIn)
    const contactElements = document.querySelectorAll('.contact-info > div');

    // Apply the shake effect to each contact element (phone, email, LinkedIn)
    contactElements.forEach(addShakeEffect);
});

document.addEventListener('DOMContentLoaded', () => {
    const collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach(collapsible => {
        const content = collapsible.nextElementSibling; // Get the next sibling content div
        const gemIcon = content.querySelector('i'); // Find the <i> element inside the content

        collapsible.addEventListener('mouseenter', () => {
            // Open the collapsible content
            content.style.maxHeight = content.scrollHeight + "px";

            // Add a delay before the shake animation
            setTimeout(() => {
                gemIcon.classList.add('shake');

                // Remove the shake class after the animation ends
                gemIcon.addEventListener('animationend', () => {
                    gemIcon.classList.remove('shake');
                }, { once: true });
            }, 2000); // Adjust the delay (2000ms = 2 seconds)
        });

        collapsible.addEventListener('mouseleave', () => {
            // Close the collapsible content
            content.style.maxHeight = null;
        });
    });
});
