        function trocarImagem(elemento) {
            const imagemPrincipal = document.getElementById('imagem-principal');
            imagemPrincipal.src = elemento.src;
            document.querySelectorAll('.miniaturas img').forEach(img => img.style.borderColor = 'transparent');
            elemento.style.borderColor = '#e5b80b';
        }