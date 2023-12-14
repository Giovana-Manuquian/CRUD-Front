const retornarButton = document.getElementById('returnButton');
retornarButton.addEventListener('click', () => {
    const index = "../../index.html"
    window.location.href = index
});

async function cadastrarContato() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const favoritoElement = document.getElementById('favorito');
    const favorito = favoritoElement.checked ? 1 : 0;
    const foto = document.getElementById('foto').value;

    const contatoData = {
        nome,
        telefone,
        favorito,
        email,
        foto,
    };

    try {
        const response = await fetch('http://127.0.0.1:5600/cadastrarContato', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contatoData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Adiciona um console.log para visualizar a resposta do servidor
        console.log('Resposta do servidor:', await response.text());
        // Adiciona uma mensagem de sucesso
        alert("Contato Cadastrado com Sucesso!!");

        // Adiciona um pequeno atraso (500 milissegundos) antes de recarregar a página
        setTimeout(() => {
            window.location.reload(true);
        }, 500);
    } catch (error) {
        console.error('Erro:', error);
        alert("Erro ao Cadastrar Contato!!");
    }
}
