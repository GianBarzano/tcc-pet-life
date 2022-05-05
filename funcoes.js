function onFecharFiltro(){
    let filtro = document.querySelector('.gg-filtros');
    if (filtro) {
        filtro.classList.remove('gg-filtros--visivel');
    }
}
function onMostrarFiltro(){
    let filtro = document.querySelector('.gg-filtros');
    if (filtro) {
        filtro.classList.add('gg-filtros--visivel');
    }
}