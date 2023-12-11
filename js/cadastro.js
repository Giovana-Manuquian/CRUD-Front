const retornarButton = document.getElementById('returnButton');
retornarButton.addEventListener('click', () => {
    const index = "../../index.html"
    window.location.href = index
});


async function cadastrarContato() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const favorito = document.getElementById('favorito').value;
    const foto = document.getElementById('foto').value; // Assume que 'foto' é uma string representando a imagem

    const contatoData = {
        nome,
        telefone,
        favorito,
        email,
        foto,
    };

    console.log(contatoData.foto)

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

        const responseData = await response.json();

        console.log(responseData);
        alert("Contato Cadastrado com Sucesso !!");

        const index = "../../index.html";
        window.location.href = index;
    } catch (error) {
        console.error('Erro:', error);
        alert("Erro ao Cadastrar Contato!!");
    }
}


