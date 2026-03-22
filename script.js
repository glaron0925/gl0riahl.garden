// Replace your current <script> content with this:
let highestZ = 10;

document.querySelectorAll('.item').forEach(block => {
    block.addEventListener('mouseenter', () => {
        highestZ++; 
        block.style.zIndex = highestZ;
    });
});

