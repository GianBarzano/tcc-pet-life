onBtnLogoutClick = () => {
    const enderecoAtualSplit = window.location.href.split('/');
    enderecoAtualSplit.pop();
    enderecoAtualSplit.pop();
    let novoEndereco = enderecoAtualSplit.join('/') + '/index.html';
    window.location.href = novoEndereco;
}

onBtnHomeClick = () => {
    const enderecoAtualSplit = window.location.href.split('/');
    enderecoAtualSplit.pop();
    let novoEndereco = enderecoAtualSplit.join('/') + '/pet-lista.html';
    window.location.href = novoEndereco;
}