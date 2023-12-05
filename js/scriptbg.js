let bg = document.querySelector(".mouse-parallax__bg");
window.addEventListener('mousemove', function(event) {
    let x = event.clientX / window.innerWidth;
    let y = event.clientY / window.innerHeight;
    bg.style.transform = `translate(${-x * 50}px, ${-y * 50}px)`;
})