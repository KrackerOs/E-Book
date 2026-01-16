function scrollToForm() {
    document.getElementById('download').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('ebook-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Pega os dados (aqui você enviaria para uma API)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if(name && email) {
        // Esconde o form e mostra mensagem de sucesso
        document.getElementById('ebook-form').classList.add('hidden');
        document.getElementById('message').classList.remove('hidden');
        
        console.log(`Lead capturado: ${name} - ${email}`);
    }
});