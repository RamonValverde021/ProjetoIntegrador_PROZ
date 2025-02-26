
document.addEventListener("DOMContentLoaded", function () {
    function validarFormulario(event) {
        event.preventDefault(); // Impede o envio do formulário se houver erro

        let formulario = event.target; // Identifica o formulário que foi enviado
        let campos = [];

        if (formulario.id === "formEnvolvimento") {
            campos = [
                { id: "nome", mensagem: "O campo Nome é obrigatório." },
                { id: "email", mensagem: "E-mail inválido.", validar: validarEmail },
                { id: "whatsapp", mensagem: "Número de WhatsApp inválido (somente números, mínimo de 9 dígitos).", validar: validarWhatsApp }
            ];
        } else if (formulario.id === "formContato") {
            campos = [
                { id: "nome_contato", mensagem: "O campo Nome (Contato) é obrigatório." },
                { id: "email_contato", mensagem: "E-mail (Contato) inválido.", validar: validarEmail },
                { id: "whatsapp_contato", mensagem: "Número de WhatsApp (Contato) inválido.", validar: validarWhatsApp },
                { id: "duvidas", mensagem: "O campo de dúvidas/sugestões não pode estar vazio." }
            ];
        }

        let erros = 0;

        // Limpar mensagens de erro anteriores APENAS no formulário atual
        formulario.querySelectorAll(".erro-mensagem").forEach(el => el.remove());
        formulario.querySelectorAll(".erro").forEach(el => el.classList.remove("erro"));

        campos.forEach(campo => {
            let elemento = document.getElementById(campo.id);
            let valor = elemento.value.trim();
            let invalido = !valor || (campo.validar && !campo.validar(valor));

            if (invalido) {
                erros++;
                mostrarErro(elemento, campo.mensagem);
            }
        });

        if (erros === 0) {
            alert("Formulário enviado com sucesso!");
            formulario.submit();
        }
    }

    function validarEmail(email) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validarWhatsApp(numero) {
        let re = /^[0-9]{9,15}$/;
        return re.test(numero);
    }

    function mostrarErro(elemento, mensagem) {
        elemento.classList.add("erro");

        let mensagemErro = document.createElement("small");
        mensagemErro.textContent = mensagem;
        mensagemErro.classList.add("erro-mensagem");
        elemento.parentNode.appendChild(mensagemErro);
    }

    function adicionarEstilos() {
        let estilo = document.createElement("style");
        estilo.textContent = `
            .erro {
                border: 2px solid red !important;
                background-color: #ffdddd !important;
            }
            .erro-mensagem {
                color: red;
                font-size: 0.9em;
                margin-top: 5px;
                display: block;
            }
        `;
        document.head.appendChild(estilo);
    }

    adicionarEstilos();

    document.getElementById("formEnvolvimento").addEventListener("submit", validarFormulario);
    document.getElementById("formContato").addEventListener("submit", validarFormulario);
});
