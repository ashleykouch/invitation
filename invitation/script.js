let card = document.getElementById('card');
let startX = 0;
let endX = 0;
let isMouseDown = false;

card.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

card.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
})

// Desktop swipe events
card.addEventListener('mousedown', (e) => {
    isMouseDown = true;
    startX = e.clientX;
});

card.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    endX = e.clientX;
});

card.addEventListener('mouseup', () => {
    if (isMouseDown) {
        handleSwipe();
        isMouseDown = false;
    }
});

card.addEventListener('mouseleave', () => {
    if (isMouseDown) {
        handleSwipe();
        isMouseDown = false;
    }
});

function handleSwipe() {
    const swipeDistance = endX - startX;

    if (Math.abs(swipeDistance) > 50){
        card.classList.toggle('flipped')
    }
}