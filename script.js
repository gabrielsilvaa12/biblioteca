document.addEventListener('DOMContentLoaded', () => {

    const livros = [
        { id: 10, titulo: "A Cidade nas Nuvens", autor: "Anthony Doerr", capa: "https://i.imgur.com/r6jwjXG.jpeg", categoria: "lancamento" },
        { id: 11, titulo: "Klara e o Sol", autor: "Kazuo Ishiguro", capa: "https://i.imgur.com/6XkmyL9.jpeg", categoria: "lancamento" },
        { id: 1, titulo: "Orgulho e Preconceito", autor: "Jane Austen", capa: "https://i.imgur.com/gO232SV.jpeg", categoria: "romance" },
        { id: 2, titulo: "Como Eu Era Antes de Você", autor: "Jojo Moyes", capa: "https://i.imgur.com/vHlw5O5.jpeg", categoria: "romance" },
        { id: 3, titulo: "Eleanor & Park", autor: "Rainbow Rowell", capa: "https://i.imgur.com/rEze2aM.jpeg", categoria: "romance" },
        { id: 4, titulo: "Duna", autor: "Frank Herbert", capa: "https://i.imgur.com/s4n9jVv.jpeg", categoria: "ficcao" },
        { id: 5, titulo: "O Guia do Mochileiro das Galáxias", autor: "Douglas Adams", capa: "https://i.imgur.com/Wb2SCh0.jpeg", categoria: "ficcao" },
        { id: 7, titulo: "1984", autor: "George Orwell", capa: "https://i.imgur.com/V2YV2qJ.jpeg", categoria: "ficcao" },
        { id: 12, titulo: "Meridiano de Sangue", autor: "Cormac McCarthy", capa: "https://i.imgur.com/Q2hF8gW.jpeg", categoria: "faroeste" },
        { id: 13, titulo: "Lonesome Dove", autor: "Larry McMurtry", capa: "https://i.imgur.com/gHfYC9v.jpeg", categoria: "faroeste" },
        { id: 6, titulo: "Dom Casmurro", autor: "Machado de Assis", capa: "https://i.imgur.com/dCdKLy1.jpeg", categoria: "classico" },
        { id: 8, titulo: "O Hobbit (Audiobook)", autor: "J.R.R. Tolkien", capa: "https://i.imgur.com/fL3yNqD.jpeg", categoria: "audiobook" },
        { id: 9, titulo: "A Arte da Guerra (Audiobook)", autor: "Sun Tzu", capa: "https://i.imgur.com/V32yq7r.jpeg", categoria: "audiobook" },
    ];

    function renderLivros(container, livrosParaRenderizar) {
        if (!container) return;
        container.innerHTML = '';
        const livrosLimitados = livrosParaRenderizar.slice(0, 4);
        livrosLimitados.forEach(livro => {
            const livroCardHTML = `<article class="livro-card"><img src="${livro.capa}" alt="Capa do livro ${livro.titulo}"><div class="livro-card-content"><h3>${livro.titulo}</h3><p>${livro.autor}</p><a href="#" class="btn btn-secondary">Ver detalhes</a></div></article>`;
            container.innerHTML += livroCardHTML;
        });
    }

    function popularSecoes() {
        renderLivros(document.querySelector('#lancamentos .livros-grid'), livros.filter(l => l.categoria === 'lancamento'));
        renderLivros(document.querySelector('#romance .livros-grid'), livros.filter(l => l.categoria === 'romance'));
        renderLivros(document.querySelector('#ficcao .livros-grid'), livros.filter(l => l.categoria === 'ficcao'));
        renderLivros(document.querySelector('#faroeste .livros-grid'), livros.filter(l => l.categoria === 'faroeste'));
        renderLivros(document.querySelector('#audiobooks .livros-grid'), livros.filter(l => l.categoria === 'audiobook'));
    }
    
    popularSecoes();

    const openModalBtn = document.getElementById('open-modal-btn');
    const modalOverlay = document.getElementById('registro-modal-overlay');
    const closeModalBtn = document.getElementById('modal-close-btn');
    const firstInput = document.getElementById('nome');

    function openModal() {
        modalOverlay.classList.add('visible');
        firstInput.focus();
    }

    function closeModal() {
        modalOverlay.classList.remove('visible');
    }

    openModalBtn.addEventListener('click', (event) => {
        event.preventDefault(); 
        openModal();
    });

    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modalOverlay.classList.contains('visible')) {
            closeModal();
        }
    });

    const registroForm = document.getElementById('registro-form');
    registroForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Conta criada com sucesso!');
        closeModal();
    });

});