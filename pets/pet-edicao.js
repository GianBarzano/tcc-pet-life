onBtnSalvarClick = () => {
    const enderecoAtualSplit = window.location.href.split('/');
    enderecoAtualSplit.pop();
    let novoEndereco = enderecoAtualSplit.join('/') + '/pet.html';
    window.location.href = novoEndereco;
}

onBtnVoltarClick = () => {
    const enderecoAtualSplit = window.location.href.split('/');
    enderecoAtualSplit.pop();
    let novoEndereco = enderecoAtualSplit.join('/') + '/pet.html';
    window.location.href = novoEndereco;
}

onPagePetEdicaoLoad = () => {
    const compFoto = document.querySelector('.comp-input-img');
    
    inicializarInputImg(compFoto);
}