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


// Add event listener for document click
document.addEventListener('click', function(event) {
    // Check if the left mouse button was clicked (button code 0)
    if (event.button === 0) {
        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Smooth scroll
        });
    }
});

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

