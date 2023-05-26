const logo = document.getElementById('logo');

logo.addEventListener('mouseenter', function() {
    logo.src = '../assets/logoMoved.png';
})

logo.addEventListener('mouseleave', function() {
    logo.src = '../assets/logo.png';
})