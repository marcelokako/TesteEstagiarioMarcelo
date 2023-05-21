const nome = document.getElementById("nome")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const form = document.getElementById("form")
const bloco = document.getElementById("bloco")
var atualizar = document.getElementById("escondido")
// Captura elementos pelo id

// Observar o evento submit, que é quando o botão enviar é apertado
form.addEventListener('submit', (e)=>{
    var cadastro = {
        Nome: "",
        Email: "",
        Telefone:""
    } // Criação de um dicionário com informações de cadastro
    
    // Cria lista vazia que irá guardar todas as mensagens de erro
    let mensagensErro = []

    // Verificação se conteudo das caixas estão vazios ou nulos, esta verificação também
    // poderia ser feita no proprio html, utilizando o elemento "required" dentro dos inputs
    if(nome.value === '' || nome.value === null)
    {
        mensagensErro.push("Campo 'nome' está vazio")
    }

    if(email.value === '' || email.value === null)
    {
        mensagensErro.push("Campo 'email' está vazio")
    }

    if(telefone.value === '' || telefone.value === null)
    {
        mensagensErro.push("Campo 'telefone' está vazio")
    }

    // Se a lista de mensagnes de erro estiver vazia, quer dizer que deu tudo certo
    // se não, exibe mensagens de erro.
    if (mensagensErro.length > 0){
        e.preventDefault()
        bloco.innerText = mensagensErro.join('\n')
        atualizar.hidden = false
    } else {
        // Adiciona os valores no dicionário
        cadastro.Nome = nome.value
        cadastro.Email = email.value
        cadastro.Telefone = telefone.value
        
        // Cria lista para adicionar as informações do cadastro em forma de texto
        let mostrarCadastro = []
        for (var chave in cadastro){
            mostrarCadastro.push(chave + ": " + cadastro[chave])
        }

        // Finalmente, exibe as mensagens
        bloco.innerText = "Obrigado por seu cadastro!"
        console.log(mostrarCadastro.join('\n'))

        atualizar.hidden = false
    }
})