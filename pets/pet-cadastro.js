onPagePetCadastroLoad = () => {
    const compFoto = document.querySelector('.comp-input-img');
    
    inicializarInputImg(compFoto);
    let urlVideo = 'https://media.istockphoto.com/videos/aerial-view-of-the-shore-of-the-beach-in-cancun-mexico-video-id1264047349';
    urlVideo = 'https://clickcompany.s3.sa-east-1.amazonaws.com/midias/D2XlBStC8NYMPdDrPspdnAIOgxAe5OS7VPrwH6gW.mp4';
    gerarImagemFromVideo(urlVideo)
        .then((res) => {
            let dataUrl = URL.createObjectURL(res);
            console.log("Resultado imagem", res, 'dataUrl', dataUrl);
        }).catch(err => {
            console.log("Erro conversão imagem", err);
        })
}

gerarImagemFromVideo = (url, seekTo = 0.0) => {
    console.log("getting video cover for file: ", url);
    return new Promise((resolve, reject) => {
        try {
            // load the file to a video player
            const videoPlayer = document.createElement('video');
            videoPlayer.setAttribute('src', url);
            videoPlayer.setAttribute('crossOrigin', 'anonymous');
            videoPlayer.addEventListener('error', (ex) => {
                reject("error when loading video file", ex);
            });
            // load metadata of the video to get video duration and dimensions
            videoPlayer.addEventListener('loadedmetadata', () => {
                // seek to user defined timestamp (in seconds) if possible
                if (videoPlayer.duration < seekTo) {
                    reject("video is too short.");
                    return;
                }
                
                // extract video thumbnail once seeking is complete
                videoPlayer.addEventListener('seeked', () => {
                    console.log('video is now paused at %ss.', seekTo);
                    // define a canvas to have the same dimension as the video
                    const canvas = document.createElement("canvas");
                    canvas.width = videoPlayer.videoWidth;
                    canvas.height = videoPlayer.videoHeight;
                    // draw the video frame to canvas
                    const ctx = canvas.getContext("2d");
                    ctx.drawImage(videoPlayer, 0, 0, canvas.width, canvas.height);
                    // return the canvas image as a blob
                    ctx.canvas.toBlob(
                        blob => {
                            resolve(blob);
                        },
                        "image/jpeg",
                        0.75 /* quality */
                    );
                });

                // delay seeking or else 'seeked' event won't fire on Safari
                setTimeout(() => {
                    videoPlayer.currentTime = seekTo;
                }, 200);
            });
            videoPlayer.load();
        } catch (error) {
            reject("Erro ao converter");
        }
    });
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