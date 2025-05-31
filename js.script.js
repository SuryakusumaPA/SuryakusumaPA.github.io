// js.script.js

// Smooth scroll saat klik menu navigasi
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Menampilkan alert saat mengklik kontak email
const emailElement = document.querySelector('#contact p:first-child');
emailElement.addEventListener('click', function() {
    alert("Silakan hubungi saya melalui email: 23083000040@student.unmer.ac.id");
});
