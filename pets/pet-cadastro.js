onPagePetCadastroLoad = () => {
    const compFoto = document.querySelector('.comp-input-img');
    
    inicializarInputImg(compFoto);
}

onBtnCadastrarClick = () => {
    const enderecoAtualSplit = window.location.href.split('/');
    enderecoAtualSplit.pop();
    let novoEndereco = enderecoAtualSplit.join('/') + '/pet-lista.html';
    window.location.href = novoEndereco;
}

onBtnVoltarClick = () => {
    const enderecoAtualSplit = window.location.href.split('/');
    enderecoAtualSplit.pop();
    let novoEndereco = enderecoAtualSplit.join('/') + '/pet-lista.html';
    window.location.href = novoEndereco;
}