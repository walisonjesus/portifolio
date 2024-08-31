const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//animação para o title menBu
const options = {
    strings: ["Bem-vindo ao Meu Site!", "Bem-vindos ao meu Site", "Explore meus projetos.", "Entre em contato!",],
    typeSpeed: 50,   // Velocidade de digitação
    backSpeed: 50,   // Velocidade de apagar
    backDelay: 1000, // Pausa antes de apagar
    startDelay: 500, // Pausa antes de começar a digitar
    loop: true,      // Repete o efeito
};

const typed = new Typed('.apresentacao__conteudo__titulo', options);