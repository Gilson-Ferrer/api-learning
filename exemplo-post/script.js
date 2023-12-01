// capturar elementos

const nomeProduto = document.getElementById('nome-produto');
const valorProduto = document.getElementById('valor-produto');
const descricaoProduto = document.getElementById('descricao-produto');
const btnEnviar = document.getElementById('btn-enviar');
const feedbackUsuario = document.getElementById('feedback-usuario')
const produtosCadastrados = document.getElementById('produtos-cadastrados')



//funcão

function adicionarProduto(e){
    e.preventDefault()
    feedbackUsuario.innerText = ''
    const produtosJson = JSON.stringify({
        produto: nomeProduto.value,
        valor: valorProduto.value,
        descricao: descricaoProduto.value 
    })

//Posts
    

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: produtosJson
    })

.then(response => response.json())
.then(data => 
        { 
    const textoLista = document.querySelector('.texto-lista') 
    const listaProdutos = document.createElement('div')
    listaProdutos.innerHTML = `
        <h3><strong>${data.produto}</strong></h3>
        <p>${data.descricao}</p>
        <span>R$ ${parseFloat(data.valor).toFixed(2)}</span>
        <br>
            
        `
        listaProdutos.classList.add('estilizar-conteiner')
        produtosCadastrados.appendChild(listaProdutos)
        nomeProduto.value = ''
        valorProduto.value = ''
        descricaoProduto.value = ''
        alert('Produto adicionado com sucesso!')
  

    }
    )
    .catch((error) => {
        console.log(error)
        feedbackUsuario.innerText = 'Não foi possível cadastrar o produto.'
    })

}

// eventos

btnEnviar.addEventListener('click',(e) => adicionarProduto(e))