// Função para criar um card
function createCard(contact) {
    const cardContainer = document.getElementById('cardContainer');
    const card = document.createElement('div');
    card.classList.add('card');

    // Conteúdo do card
    card.innerHTML = `
        <img src="${contact.foto}" alt="${contact.nome}">
        <h2>${contact.nome}</h2>
        <p>Telefone: ${contact.telefone}</p>
        <p>Email: ${contact.email}</p>
        <button class="favorite-button">${contact.favorito ? 'Desfavoritar' : 'Favoritar'}</button>
    `;

    cardContainer.appendChild(card);

    // Adicionar um evento de favoritar/desfavoritar ao botão
    const favoriteButton = card.querySelector('.favorite-button');
    favoriteButton.addEventListener('click', () => {
        contact.favorito = !contact.favorito;
        favoriteButton.textContent = contact.favorito ? 'Desfavoritar' : 'Favoritar';
    });
}

// Função para carregar os dados da API usando fetch
async function loadContacts() {
    try {
        const response = await fetch('http://127.0.0.1:8000/contatosList');
        const contacts = await response.json();

        contacts.forEach((contact) => {
            createCard(contact);
        });
    } catch (error) {
        console.error('Erro ao carregar os contatos da API:', error);
    }
}

// Adicionar um evento ao botão "Adicionar Card"
// const addButton = document.getElementById('addCard');
// addButton.addEventListener('click', () => {
//     // Você pode adicionar código para adicionar novos cards aqui
//     // Por exemplo, abrir um modal de entrada de dados
// });

// Carregar os contatos da API ao carregar a página
loadContacts();
