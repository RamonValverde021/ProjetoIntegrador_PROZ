const sustentabilidadeArray = [
    {
        id: "introducao-sustentabilidade",
        titulo: "Introdução à Sustentabilidade",
        conteudo:
            "<p>A sustentabilidade é mais do que uma tendência, é uma necessidade global que começa com pequenas ações no nível local. Em condomínios, onde muitas pessoas compartilham recursos e espaços, há um enorme potencial para implementar práticas que promovam o equilíbrio ambiental e social. Transformar o ambiente onde vivemos em um exemplo de responsabilidade ambiental não é apenas benéfico para a comunidade, mas também para o planeta como um todo.</p>" +
            "<p>Um condomínio sustentável pode reduzir custos com energia, água e manutenção, além de aumentar a qualidade de vida dos moradores. A chave está em integrar práticas como eficiência energética, gestão de resíduos, uso consciente de água e engajamento coletivo. Isso inclui desde a instalação de sensores de presença até a criação de políticas de reúso de materiais.</p>",
        image: "../_imagens/solucoes_sustentaveis/1-sustentabilidade.jpg",
        alt: "Imagem representativa de sustentabilidade",
    },
    {
        id: "idealize",
        titulo: "1. Idealize",
        conteudo:
            "<p>Ter uma visão clara é o primeiro passo para qualquer projeto de sustentabilidade. Idealizar um condomínio sustentável significa pensar em longo prazo e imaginar como cada ação pode contribuir para o bem-estar da comunidade e para a preservação do meio ambiente. Comece definindo metas realistas, como reduzir o consumo de energia em 20% ou implantar uma horta comunitária.</p>" +
            "<p>Envolver os moradores desde o início garante maior adesão às mudanças. Realize assembleias para discutir prioridades e crie um plano de ação com etapas claras. Lembre-se de que a sustentabilidade não é um projeto único, mas um processo contínuo de melhoria.</p>",
        image: "../_imagens/solucoes_sustentaveis/2-pensar.jpg",
        alt: "Imagem ilustrativa sobre idealização",
    },
    {
        id: "compartilhe",
        titulo: "2. Compartilhe suas Ideias",
        conteudo:
            "<p>A comunicação é fundamental para transformar ideias em ações concretas. Compartilhar seus planos com os moradores e gestores do condomínio cria um senso de colaboração e engajamento. Utilize murais físicos ou digitais (como grupos em redes sociais) para divulgar iniciativas.</p>" +
            "<p>Quanto maior a transparência, mais fácil será mobilizar a comunidade. Crie um canal aberto para sugestões e feedback, como uma caixa de ideias na portaria ou uma enquete online. Reconheça as contribuições dos moradores para incentivar a participação contínua.</p>",
        image: "../_imagens/solucoes_sustentaveis/3-compartilhar.jpg",
        alt: "Imagem ilustrativa sobre compartilhamento de ideias",
    },
    {
        id: "compostagem",
        titulo: "3. Pratique Compostagem",
        conteudo:
            "<p>A compostagem é uma maneira simples e eficaz de reduzir a quantidade de lixo orgânico descartado. Ao transformar resíduos de alimentos em adubo, você contribui para a fertilidade do solo nas áreas verdes. Para começar, disponibilize recipientes específicos para resíduos orgânicos e ofereça workshops para ensinar os moradores a separar corretamente os materiais.</p>" +
            "<p>O composto resultante pode ser usado em jardins, vasos e áreas comuns, reduzindo a necessidade de fertilizantes químicos. Incentive a participação com descontos na taxa de condomínio para quem contribuir com resíduos orgânicos regularmente.</p>",
        image: "../_imagens/solucoes_sustentaveis/4-compostagem.jpg",
        alt: "Imagem ilustrativa sobre compostagem",
    },
    {
        id: "painel-solar",
        titulo: "4. Instale Painéis Solares",
        conteudo:
            "<p>A instalação de painéis solares é uma solução inovadora e sustentável para condomínios que buscam reduzir sua pegada de carbono. Além de gerar economia na conta de energia, os painéis podem ser integrados à arquitetura do condomínio, como coberturas de estacionamentos ou áreas de lazer.</p>" +
            "<p>Verifique incentivos fiscais e programas de financiamento para projetos sustentáveis. Calcule o retorno sobre o investimento (ROI) para apresentar aos moradores, destacando a redução de custos a médio prazo.</p>",
        image: "../_imagens/solucoes_sustentaveis/5-paineis_solares.jpg",
        alt: "Imagem ilustrativa sobre painéis solares",
    },
    {
        id: "coleta-seletiva",
        titulo: "5. Implemente a Coleta Seletiva",
        conteudo:
            "<p>A coleta seletiva é uma prática essencial para garantir que os resíduos recicláveis sejam devidamente tratados. Distribua lixeiras coloridas (azul para papel, verde para vidro, etc.) em áreas comuns e nos apartamentos. Realize campanhas educativas para explicar a importância da separação correta.</p>" +
            "<p>Monitore o progresso com relatórios mensais de reciclagem e compartilhe os resultados com os moradores. Estabeleça metas, como aumentar a taxa de reciclagem em 30% no próximo ano, e celebre as conquistas coletivamente.</p>",
        image: "../_imagens/solucoes_sustentaveis/6-coleta_seletiva.png",
        alt: "Imagem ilustrativa sobre coleta seletiva",
    },
    {
        id: "grupos-trabalho",
        titulo: "6. Crie Grupos de Trabalho",
        conteudo:
            "<p>A formação de grupos de trabalho é uma estratégia eficaz para implementar mudanças no condomínio. Dividir os moradores em equipes com responsabilidades específicas torna o processo mais organizado e colaborativo. Exemplos de grupos: equipe de monitoramento de energia, comitê de jardinagem sustentável e grupo de educação ambiental.</p>" +
            "<p>Reuniões mensais ajudam a manter o foco nas metas. Ofereça certificados de participação ou pequenos prêmios para os grupos que alcançarem as metas estabelecidas, como um jantar sustentável ou um kit de sementes.</p>",
        image: "../_imagens/solucoes_sustentaveis/7-grupos_de_trabalho.jpg",
        alt: "Imagem ilustrativa sobre grupos de trabalho",
    },
]

document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("card-container")
    sustentabilidadeArray.forEach((item) => {
        const divCard = document.createElement("article")
        divCard.classList.add("cards")
        divCard.id = item.id

        const title = document.createElement("h2")
        title.classList.add("h2_subtitulo")
        title.textContent = item.titulo

        // Container para os parágrafos
        const contentContainer = document.createElement("div")
        contentContainer.classList.add("paragrafo-container")
        contentContainer.innerHTML = item.conteudo 

        const image = document.createElement("img")
        image.src = item.image
        image.alt = item.alt
        image.classList.add("figura")

        divCard.appendChild(title)
        divCard.appendChild(contentContainer)
        divCard.appendChild(image)
        cardContainer.appendChild(divCard)
    })
})
