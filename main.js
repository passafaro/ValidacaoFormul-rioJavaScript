class ValidaFormulario {
    constructor(){
        this.form = document.querySelector("#formulario")
        this.camposValidar = document.querySelectorAll(".validar")
        this.eventoSubmit()
    }

    eventoSubmit(){
        this.form.addEventListener("submit", evento => {
            evento.preventDefault()            
            this.validaCampo()
        });
    }

    validaCampo(){       
        this.limparMensagemErro()

        let retorno = true

        this.camposValidar.forEach(campo => {
            if(this.checarCampoVazio(campo)){
                retorno = false
            }
        });

        if(this.repetirSenha())
            retorno = false
        
        if(this.apenasLetrasNumeros())
            retorno = false
        
        if(this.tamanhoUsuarioSenha("usuario", 3, 12, "O campo USUÁRIO deve conter entre 3 e 12 caracteres."))
            retorno = false

        if(this.tamanhoUsuarioSenha("senha", 6, 12, "O campo SENHA deve conter entre 6 e 12 caracteres."))
            retorno = false

            
        
        if(retorno)
            alert('Mensagem enviada')
        

        
    }

    checarCampoVazio(campo){
        let retornoChecarCampoVazio = false

        if(!campo.value){
            let label = campo.previousElementSibling
            let campoVazio = document.createElement('div')
            campoVazio.classList.add('mensagemErro')
            campoVazio.innerText = `Campo "${label.innerText}" não pode estar em branco` //
            label.insertAdjacentElement("afterend", campoVazio);
            retornoChecarCampoVazio = true
        }

        if(campo.classList.contains('cpf')){
            if(!validaCPF(campo.value)){
                let label = campo.previousElementSibling
                let campoVazio = document.createElement('div')
                campoVazio.classList.add('mensagemErro')
                campoVazio.innerText = `CPF inválido` //
                label.insertAdjacentElement("afterend", campoVazio);
                retornoChecarCampoVazio = true
            }
        }

        return retornoChecarCampoVazio
    }
    
    limparMensagemErro(){
        for(let errorText of this.form.querySelectorAll('.mensagemErro')) {
            errorText.remove();
        }
    }

    repetirSenha(){
        const senha = document.querySelector(".senha")
        const repetirSenha = document.querySelector(".repetirSenha")

        let retornoRepetirSenha = false

        if(senha.value !== repetirSenha.value){
            let label = repetirSenha.previousElementSibling
            let campoVazio = document.createElement('div')
            campoVazio.classList.add('mensagemErro')
            campoVazio.innerText = `O campo 'SENHA' e 'REPITA SENHA' não conferem` 
            label.insertAdjacentElement("afterend", campoVazio);
            retornoRepetirSenha = true
        }

        return retornoRepetirSenha
    }

    
    apenasLetrasNumeros(){
        const usuario = document.querySelector(".usuario")
        let retornoApenasLetrasNumeros = false

        if(!usuario.value.match(/^[a-zA-Z0-9]+$/g)) {
            let label = usuario.previousElementSibling
            let campoVazio = document.createElement('div')
            campoVazio.classList.add('mensagemErro')
            campoVazio.innerText = `Nome de usuário precisar conter apenas letras e/ou números.` 
            label.insertAdjacentElement("afterend", campoVazio);
            retornoApenasLetrasNumeros = true
        }

        return retornoApenasLetrasNumeros
    }


    tamanhoUsuarioSenha(nomeCampo, min,max,msg){
        const campo = document.querySelector('.' + nomeCampo)
        let retornoApenasLetrasNumeros = false

        if(campo.value.length < min || campo.value.length > max) {
            let label = campo.previousElementSibling
            let campoVazio = document.createElement('div')
            campoVazio.classList.add('mensagemErro')
            campoVazio.innerText = msg 
            label.insertAdjacentElement("afterend", campoVazio);
            retornoApenasLetrasNumeros = true
        }

        return retornoApenasLetrasNumeros
    }


    

}

const validaFormulario = new ValidaFormulario()


