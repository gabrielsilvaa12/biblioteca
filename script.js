document.addEventListener('DOMContentLoaded', () => {

    const livros = [
        { id: 10, titulo: "A Cidade nas Nuvens", autor: "Anthony Doerr", capa: "img/nuvens.jpg", categoria: "lancamento", sinopse: "Um romance épico que entrelaça as histórias de cinco personagens em diferentes épocas, todos conectados por um antigo texto grego." },
        { id: 11, titulo: "Klara e o Sol", autor: "Kazuo Ishiguro", capa: "img/klara.jpg", categoria: "lancamento", sinopse: "A história de Klara, uma Amiga Artificial com notável capacidade de observação, que, da vitrine de uma loja, observa o comportamento dos que entram para navegar e dos que passam na rua." },
        { id: 1, titulo: "Orgulho e Preconceito", autor: "Jane Austen", capa: "img/orgulho.jpg", categoria: "romance", sinopse: "A história de Elizabeth Bennet e suas irmãs, que enfrentam a pressão social para casar, enquanto Elizabeth lida com o orgulhoso Sr. Darcy." },
        { id: 2, titulo: "Como Eu Era Antes de Você", autor: "Jojo Moyes", capa: "img/antesVoce.jpg", categoria: "romance", sinopse: "Louisa Clark é contratada para cuidar de Will Traynor, um homem rico e tetraplégico, e a improvável relação entre eles muda suas vidas para sempre." },
        { id: 3, titulo: "Eleanor & Park", autor: "Rainbow Rowell", capa: "img/eleanor.jpg", categoria: "romance", sinopse: "Dois adolescentes desajustados se apaixonam em 1986, encontrando refúgio um no outro através de música e quadrinhos." },
        { id: 4, titulo: "Duna", autor: "Frank Herbert", capa: "img/duna.jpg", categoria: "ficcao", sinopse: "Em um futuro distante, Paul Atreides e sua família assumem o controle do planeta deserto Arrakis, a única fonte da especiaria Melange, a substância mais valiosa do universo." },
        { id: 5, titulo: "O Guia do Mochileiro das Galáxias", autor: "Douglas Adams", capa: "img/mochileiro.jpg", categoria: "ficcao", sinopse: "Arthur Dent é salvo da destruição da Terra por seu amigo Ford Prefect, um alienígena, e começa uma jornada hilária e absurda pelo espaço." },
        { id: 7, titulo: "1984", autor: "George Orwell", capa: "img/1984.jpg", categoria: "ficcao", sinopse: "Em um futuro totalitário, Winston Smith luta contra a opressão do Partido e do onipresente Grande Irmão, que vigia a todos." },
        { id: 12, titulo: "Meridiano de Sangue", autor: "Cormac McCarthy", capa: "img/meridiano.jpg", categoria: "faroeste", sinopse: "Um romance violento e poético sobre um adolescente que se junta a um bando de caçadores de escalpos na fronteira do Texas com o México em meados do século XIX." },
        { id: 13, titulo: "Lonesome Dove", autor: "Larry McMurtry", capa: "img/dove.jpg", categoria: "faroeste", sinopse: "A saga de dois Texas Rangers aposentados que decidem levar uma manada de gado do Texas para Montana, enfrentando todos os perigos do Velho Oeste." },
        { id: 8, titulo: "O Hobbit (Audiobook)", autor: "J.R.R. Tolkien", capa: "img/hoobit.jpg", categoria: "audiobook", sinopse: "A aventura de Bilbo Bolseiro, um hobbit que é levado a uma jornada inesperada com um grupo de anões para recuperar um tesouro guardado pelo dragão Smaug." },
        { id: 9, titulo: "A Arte da Guerra (Audiobook)", autor: "Sun Tzu", capa: "img/guerra.jpg", categoria: "audiobook", sinopse: "Um antigo tratado militar chinês que oferece estratégias e táticas não apenas para a guerra, mas também para negócios e para a vida." },
    ];

    function renderLivros(container, livrosParaRenderizar) {
        if (!container) return;
        container.innerHTML = '';
        const livrosLimitados = livrosParaRenderizar.slice(0, 4);
        livrosLimitados.forEach(livro => {
            const livroCardHTML = `
                <article class="livro-card">
                    <img src="${livro.capa}" alt="Capa do livro ${livro.titulo}">
                    <div class="livro-card-content">
                        <h3>${livro.titulo}</h3>
                        <p>${livro.autor}</p>
                        <a href="#" class="btn btn-secondary ver-detalhes-btn" data-id="${livro.id}">Ver detalhes</a>
                    </div>
                </article>`;
            container.innerHTML += livroCardHTML;
        });
    }

    function popularSecoes() {
        renderLivros(document.querySelector('#lancamentos .livrosGrid'), livros.filter(l => l.categoria === 'lancamento'));
        renderLivros(document.querySelector('#romance .livrosGrid'), livros.filter(l => l.categoria === 'romance'));
        renderLivros(document.querySelector('#ficcao .livrosGrid'), livros.filter(l => l.categoria === 'ficcao'));
        renderLivros(document.querySelector('#faroeste .livrosGrid'), livros.filter(l => l.categoria === 'faroeste'));
        renderLivros(document.querySelector('#audiobooks .livrosGrid'), livros.filter(l => l.categoria === 'audiobook'));
        adicionarEventosVerDetalhes();
    }
    
    popularSecoes();

    const openModalBtns = document.querySelectorAll('.modalBtn');
    const registroModalOverlay = document.getElementById('registroModalOverflay');
    const closeModalBtn = document.getElementById('modalCloseBtn');
    const firstInput = document.getElementById('nome');

    function openRegistroModal() {
        registroModalOverlay.classList.add('visible');
        firstInput.focus();
    }

    function closeRegistroModal() {
        registroModalOverlay.classList.remove('visible');
    }

    openModalBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            event.preventDefault();
            openRegistroModal();
        });
    });

    closeModalBtn.addEventListener('click', closeRegistroModal);
    registroModalOverlay.addEventListener('click', (event) => {
        if (event.target === registroModalOverlay) {
            closeRegistroModal();
        }
    });

const registroForm = document.getElementById('registroForm');
registroForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const senhaInput = document.getElementById('senha');
    const senha = senhaInput.value;

    if (senha.length < 6) {
        alert('A senha deve ter no mínimo 6 caracteres.');
        return;
    }

    alert('Conta criada com sucesso!');
    closeRegistroModal();
});
    
    const livroModalOverlay = document.getElementById('livroModalOverflay');
    const livroModalBody = document.getElementById('modalCloseBody');
    const livroModalCloseBtn = document.getElementById('livroModalCloseBtn');

    function openLivroModal(livro) {
        livroModalBody.innerHTML = `
            <img src="${livro.capa}" alt="Capa do livro ${livro.titulo}">
            <div>
                <h3>${livro.titulo}</h3>
                <p><strong>Autor:</strong> ${livro.autor}</p>
                <p>${livro.sinopse}</p>
            </div>
        `;
        livroModalOverlay.classList.add('visible');
    }

    function closeLivroModal() {
        livroModalOverlay.classList.remove('visible');
    }

    function adicionarEventosVerDetalhes() {
        const verDetalhesBtns = document.querySelectorAll('.ver-detalhes-btn');
        verDetalhesBtns.forEach(btn => {
            btn.addEventListener('click', (event) => {
                event.preventDefault();
                const livroId = parseInt(btn.dataset.id);
                const livroSelecionado = livros.find(l => l.id === livroId);
                if (livroSelecionado) {
                    openLivroModal(livroSelecionado);
                }
            });
        });
    }

    livroModalCloseBtn.addEventListener('click', closeLivroModal);
    livroModalOverlay.addEventListener('click', (event) => {
        if (event.target === livroModalOverlay) {
            closeLivroModal();
        }
    });
    
    const accessibilityBtn = document.getElementById('btnAcessivel');
    const accessibilityPanel = document.getElementById('painelAcessivel');
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const highContrastBtn = document.getElementById('high-contrast');
    const rootHtml = document.documentElement;

    accessibilityBtn.addEventListener('click', () => {
        accessibilityPanel.classList.toggle('visible');
    });

    increaseFontBtn.addEventListener('click', () => {
        let currentSize = parseFloat(window.getComputedStyle(rootHtml).fontSize);
        if (currentSize < 22) {
            rootHtml.style.fontSize = `${currentSize + 2}px`;
        }
    });

    decreaseFontBtn.addEventListener('click', () => {
        let currentSize = parseFloat(window.getComputedStyle(rootHtml).fontSize);
        if (currentSize > 12) {
             rootHtml.style.fontSize = `${currentSize - 2}px`;
        }
    });

    highContrastBtn.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (registroModalOverlay.classList.contains('visible')) {
                closeRegistroModal();
            }
            if (livroModalOverlay.classList.contains('visible')) {
                closeLivroModal();
            }
        }
    });

});