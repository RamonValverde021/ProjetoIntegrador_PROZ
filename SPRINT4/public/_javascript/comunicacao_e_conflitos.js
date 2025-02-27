document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Validação simples
    const nome = document.getElementById('Nome').value.trim();
    const email = document.getElementById('Email').value.trim();
    const unidade = document.getElementById('Unidade').value.trim();
    const mensagem = document.getElementById('mensagem_contato').value.trim();

    if (nome === '' || email === '' || unidade === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    // Por exemplo, usando fetch ou XMLHttpRequest

    // Feedback ao usuário
    document.getElementById('feedback').innerText = 'Formulário enviado com sucesso!';
    document.getElementById('contatoForm').reset(); // Limpa o formulário
});
