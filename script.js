// =========================
// AGRINHO 2026 - SCRIPT.JS
// =========================

// Mensagem de boas-vindas
window.addEventListener("load", () => {
    console.log("Projeto Agrinho 2026 carregado com sucesso!");
});

// Rolagem suave do menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Animação ao aparecer na tela
const elementos = document.querySelectorAll('.card');

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('mostrar');
        }
    });
}, {
    threshold: 0.2
});

elementos.forEach(card => {
    observador.observe(card);
});

// Contador de visitantes da sessão
let visitas = sessionStorage.getItem("visitas");

if (!visitas) {
    visitas = 1;
} else {
    visitas = Number(visitas) + 1;
}

sessionStorage.setItem("visitas", visitas);

console.log(`Visita nesta sessão: ${visitas}`);

// Botão voltar ao topo
const botaoTopo = document.createElement("button");
botaoTopo.innerHTML = "⬆";
botaoTopo.id = "btnTopo";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }
});

botaoTopo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
