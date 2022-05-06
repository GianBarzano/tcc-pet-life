onBtnLogoutClick = () => {
    const enderecoAtualSplit = window.location.href.split('/');
    enderecoAtualSplit.pop();
    enderecoAtualSplit.pop();
    let novoEndereco = enderecoAtualSplit.join('/') + '/index.html';
    window.location.href = novoEndereco;
}

onBtnNovoPetClick = () => {
    const enderecoAtualSplit = window.location.href.split('/');
    enderecoAtualSplit.pop();
    let novoEndereco = enderecoAtualSplit.join('/') + '/pet-cadastro.html';
    window.location.href = novoEndereco;
}