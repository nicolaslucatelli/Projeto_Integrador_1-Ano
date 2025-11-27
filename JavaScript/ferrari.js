        function trocarImagem(elemento) {
            const imagemPrincipal = document.getElementById('imagem-principal');
            imagemPrincipal.src = elemento.src.replace('w=150', 'w=900');
        }