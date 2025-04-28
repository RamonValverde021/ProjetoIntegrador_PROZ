let body = document.querySelector("body");

// Construindo cabeçalho com renderização dinamica
let cabecalho = document.createElement("header");
cabecalho.id = "cabecalho_pagina";
cabecalho.classList.add("menu_paginas");
cabecalho.innerHTML = `
      <nav id="menu_cabecalho" class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <img id="logomarca" src="/_imagens/Logomarca_2.png" alt="Logomarca da empresa SpringFy"> 
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">☰</span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page"
                            href="/_html/comunicacao_e_conflitos.html">Comunicação e
                            Conflitos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/_html/pesquisa_e_dados.html">Pesquisa e
                            Dados</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/_html/solucoes_sustentaveis.html">Soluções
                            Sustentaveis</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/_html/contato_e_envolvimento.html">Contato
                            e
                            Envolvimento</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;
body.insertAdjacentElement("afterbegin", cabecalho);

// Construindo rodapé com renderização dinamica
let rodape = document.createElement("footer");
rodape.id = "rodape_pagina";
rodape.innerHTML = `
        <div class="footer_site">
                <section id="footer_logo" class="footer_section">
                    <img id="logo_footer" src="/_imagens/Logomarca_sem_fundo_branco.png" alt="Imagem da logomarca do site">
                </section>

                <section id="footer_info" class="footer_section">
                    <h3 class="h3_footer">Info Site</h3>
                    <p class="footer_text">Portal do Residencial Varandas do Gama!</p>
                    <p class="footer_text">Aqui promovemos práticas sustentáveis para reduzir desperdícios, otimizar
                        recursos e tornar nossa comunidade mais verde e saudável. Participe e ajude a construir um futuro
                        sustentável!</p>
                </section>

                <section id="footer_links" class="footer_section">
                    <h3 class="h3_footer">Links Rápidos</h3>
                    <ul class="footer_menu">
                        <li class="footer_item"><a class="footer_link" href="/index.html">Home</a></li>
                        <li class="footer_item"><a class="footer_link" href="/_html/comunicacao_e_conflitos.html">Comunicação
                                e Conflitos</a>
                        </li>
                        <li class="footer_item"><a class="footer_link" href="/_html/pesquisa_e_dados.html">Pesquisa e
                                Dados</a></li>
                        <li class="footer_item"><a class="footer_link" href="/_html/solucoes_sustentaveis.html">Soluções
                                Sustentaveis</a>
                        </li>
                        <li class="footer_item"><a class="footer_link" href="/_html/contato_e_envolvimento.html">Contato e
                                Envolvimento</a>
                        </li>
                    </ul>
                </section>

                <section id="footer_social" class="footer_section">
                    <h3 class="h3_footer">Redes Sociais</h3>
                    <a href="https://www.instagram.com/" target="_blank"><img class="social_icon"
                            src="/_imagens/instagram.png" alt="icone instagram"></a>
                    <a href="https://web.whatsapp.com/" target="_blank"><img class="social_icon" src="/_imagens/whatsapp.png"
                            alt="icone whatsapp"></a>
                    <a href="https://www.facebook.com/" target="_blank"><img class="social_icon" src="/_imagens/facebook.png"
                            alt="icone facebook"></a>
                    <a id="voltar_topo" href="#menu_cabecalho">Voltar ao topo ^</a>
                </section>
            </div>
            <div class="line"></div>
            <p class="footer_copy">Copyright&copy 2024 - by <i>Residencial Varandas do Gama</i></p>
        </div>
`;
body.insertAdjacentElement("beforeend", rodape);