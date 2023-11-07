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
        <div class="gridButton">
        <button class="favorite-button" id="favorite">${contact.favorito ? 'Desfavoritar' : 'Favoritar'}</button>
        <button class="buttonSet" id="setCard">Editar</button>
        <button class="buttonRemove" id="removeCard" onclick="removeCard('${contact.nome}')">Remover</button>
        </div>
    `;

    cardContainer.appendChild(card);

    // Adicionar um evento de favoritar/desfavoritar ao botão
    const favoriteButton = card.querySelector('.favorite-button');
    favoriteButton.addEventListener('click', () => {
        contact.favorito = !contact.favorito;
        favoriteButton.textContent = contact.favorito ? 'Desfavoritar' : 'Favoritar';

        console.log(!contact.favorito)
    
        if(!contact.favorito){
            favoriteButton.classList.remove('favorite-button-No')
            favoriteButton.classList.add('favorite-button')
            
    
        }else{
            favoriteButton.classList.remove('favorite-button')
            favoriteButton.classList.add('favorite-button-No')    
        }

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

//Adicionar um evento ao botão "Adicionar Card"
const addButton = document.getElementById('addCard');
addButton.addEventListener('click', () => {
    // Você pode adicionar código para adicionar novos cards aqui
    alert("Faça o código para adicionar um novo card...")
});


async function removeCard(nome) {
    try {

        window.location.reload();
        console.log("Feito Reload ...")
        
        await fetch(`http://127.0.0.1:8000/deletarContato/${nome}`, {
            method: 'DELETE' // Especifique o método DELETE
            
        });   
        
        
    } catch (error) {
        console.error('Ocorreu um erro na requisição:', error);
    }

  
    
}

// Carregar os contatos da API ao carregar a página
loadContacts();