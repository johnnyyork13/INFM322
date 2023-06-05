const logo = document.getElementById('logo');













logo.addEventListener('mouseenter', function() {
    logo.src = './assets/chickenLogoTwo.png';
})

logo.addEventListener('mouseleave', function() {
    logo.src = './assets/chickenLogoOne.png';
})