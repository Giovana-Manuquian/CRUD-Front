const retornarButton = document.getElementById('returnButton');
retornarButton.addEventListener('click', () => {
    const index = "../../index.html"
    window.location.href = index
});


async function cadastrarContato() {

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const favorito = document.getElementById('favorito').value;
    const foto = document.getElementById('foto').files[0];


    const formData = new FormData();

    formData.append('nome', nome)
    formData.append('telefone', telefone)
    formData.append('favorito', favorito)
    formData.append('foto', foto)

    console.log(formData)

    try {
        await fetch('http://127.0.0.1:8000/cadastrarContato', {
            method: 'POST', 
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                
                alert("Contato Cadastrado com Sucesso !!")
                const index = "../../index.html"
                window.location.href = index
            })
    }
    catch (error) {
        console.error('Erro:', error)
        alert("Erro ao Cadastrar Contato!!")
    }

}