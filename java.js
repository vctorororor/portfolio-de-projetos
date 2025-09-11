// Aguarda o conteúdo da página carregar completamente
document.addEventListener('DOMContentLoaded', function() {

    // Função para Scroll Reveal
    function reveal() {
        // Seleciona todos os elementos que devem ter a animação
        const reveals = document.querySelectorAll('.card, footer h2, footer div, footer p');

        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            // Pega a posição do topo do elemento em relação à janela
            const elementTop = reveals[i].getBoundingClientRect().top;
            const elementVisible = 150; // Distância para o elemento começar a aparecer

            // Adiciona a classe 'active' se o elemento estiver visível na tela
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }
    }

    // Adiciona a classe 'reveal' aos cards para prepará-los para a animação
    document.querySelectorAll('.card').forEach(card => {
        card.classList.add('reveal');
    });

    // Adiciona um "ouvinte" para o evento de scroll, chamando a função reveal
    window.addEventListener('scroll', reveal);

    // Chama a função uma vez no início para verificar elementos já visíveis
    reveal();

});
